"use client";

import * as React from "react";

import { Checkbox } from "../../ui/checkbox";
import { Command as CommandPrimitive } from "cmdk";
import { sportsData } from "@/data/sportsData";

export function MultipleSelectDropdown() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const closeRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number[]>([]);

  const handleSelectAll = (value: boolean) => {
    if (value) {
      const test = sportsData.map((f) => f.id);
      setSelected(test);
      setOpen(true);
    } else setSelected([]);
  };

  const handleCheckboxChange = (data: number) => {
    if (!selected.includes(data)) {
      setSelected((prev) => [...prev, data]);
    } else {
      const remainingSelect = selected.filter((d) => d !== data);
      setSelected(remainingSelect);
    }
  };

  React.useEffect(() => {
    const closeDropdown = (e: any) => {
      if (open && !closeRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => document.removeEventListener("mousedown", closeDropdown);
  }, [open]);

  return (
    <CommandPrimitive
      className="w-full  bg-transparent mt-5 bg-white overflow-hidden rounded "
      ref={closeRef}
    >
      <div className="px-3 py-2 text-sm border rounded-md group border-input ">
        <div className="flex justify-between w-full ">
          <CommandPrimitive.Input
            readOnly
            ref={inputRef}
            onFocus={() => setOpen(true)}
            placeholder="All Sports"
            className="flex-1 ml-2 caret-transparent text-black text-center outline-none cursor-pointer placeholder:text-black scrollbar-w"
          />

          <Checkbox
            className=" text-white"
            checked={selected.length === sportsData.length}
            onCheckedChange={handleSelectAll}
          />
        </div>
      </div>
      {open && (
        <CommandPrimitive.List className="mx-3 h-[250px] overflow-y-scroll scrollbar-hidden">
          {sportsData.map((d) => (
            <CommandPrimitive.Item
              key={d.id}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              onSelect={() => handleCheckboxChange(d.id)}
              className={
                "relative cursor-pointer flex justify-center py-2 w-full  border-b border-dashed "
              }
            >
              <span className="text-black self-center"> {d.title}</span>
              <Checkbox
                className="absolute right-0  text-white"
                checked={selected.includes(d.id)}
              />
            </CommandPrimitive.Item>
          ))}
        </CommandPrimitive.List>
      )}
    </CommandPrimitive>
  );
}
