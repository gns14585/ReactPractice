import style2 from "../style/myCss.module.css";
export function MyText() {
  return (
    <div>
      <h1 className={`${style2.error} ${style2.coffee} ${style2.special}`}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
