import { Fragment } from "react";

/**
 * Keeps the brand's lowercase "i3" intact inside uppercase labels
 * ("About i3 Labs" renders as "ABOUT i3 LABS", matching the logo).
 */
export function BrandText({ children }: { children: string }) {
  const parts = children.split(/(i3)/);
  return (
    <>
      {parts.map((part, i) =>
        part === "i3" ? (
          <span key={i} className="normal-case">
            i3
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
