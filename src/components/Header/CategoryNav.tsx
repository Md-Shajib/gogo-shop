"use client";
import { Button } from "antd";
import { AlignLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function CategoryNav() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };
  return (
    <nav>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div>
            <Button
                onClick={toggleCategory}
              icon={<AlignLeft size={17} />}
              iconPosition="start"
              size="large"
              type="primary"
              className="uppercase transition-all duration-500"
            >
              SHOP BY CATEGORIES
              {categoryOpen ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
            </Button>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </nav>
  );
}
