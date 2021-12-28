import React from "react";
import BaseBlockContent from "@sanity/block-content-to-react";
import cn from "classnames";

const contentHeadingCls =
  "prose-headings:mt-[18px] prose-headings:lg:mt-8 prose-headings:text-primary prose-headings:text-xl prose-headings:lg:text-2xl prose-headings:font-medium";

const contentParaCls =
  "prose-p:text-sm prose-p:lg:text-base prose-p:leading-6 prose-p:mt-[18px] prose-p:lg:mt-5";

const contentLinkCls =
  "prose-a:text-primary prose-a:underline prose-a:visited:text-primary";

const contentStrongCls = "prose-strong:text-primary";

const contentListCls =
  "prose-ol:list-decimal prose-ol:px-5 prose-ol:mt-[18px] prose-ol:lg:mt-5 prose-ul:mt-[18px] prose-ul:lg:mt-5 prose-ul:px-5 prose-ul:text-sm prose-ul:leading-6 prose-ul:lg:text-base list-check-icon";

const BlockContent = ({ blocks }) => {
  return (
    <div
      className={cn(
        "mt-[18px] lg:mt-8",
        contentHeadingCls,
        contentParaCls,
        contentLinkCls,
        contentStrongCls,
        contentListCls
      )}
    >
      <BaseBlockContent blocks={blocks} />
    </div>
  );
};

export default BlockContent;
2;
