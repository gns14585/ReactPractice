import style1 from "../style/yourStyle.module.css";
export function MyBlock() {
  return (
    <div>
      <h1 className={[style1.error, style1.coffee, style1.special].join(" ")}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
