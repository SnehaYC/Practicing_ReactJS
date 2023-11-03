/** @format */
/**
 * <div id = "parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(object) => HTML(Browser understands)
 */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "child2-1" }, "I'm an h1 tag from child2"),
    React.createElement("h2", {}, "I''m an h2 tag from child2"),
  ]),
]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
