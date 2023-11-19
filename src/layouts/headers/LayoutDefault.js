import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";
import { useRouter } from "next/router";

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  const { asPath } = useRouter();

  appData.header.menu.forEach((item, index) => {
    let s_class1 = "";

    if (item.children != 0) {
      s_class1 = "mil-has-children";
    }
    if (
      (asPath.indexOf(item.link) != -1 && item.link != "/") ||
      asPath == item.link
    ) {
      s_class1 += " mil-active";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  return (
    <>
      {/* top bar */}
      <div className="mil-top-panel">
        {/* You need to remove the "mil-dot" class if you don't need a dot */}

        <div className="mil-top-panel-btns"></div>
      </div>
      {/* top bar end */}
    </>
  );
};
export default DefaultHeader;
