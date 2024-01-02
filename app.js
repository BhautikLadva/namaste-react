//  // created hello world program using react
//  const heading = React.createElement(
//     "h1", 
//     {id : "heading"},            // attritubes
//      "Hello world from React");   // children  //created h1 tag
//   //{} is for giving attributes to tag (h1)

//  const root = ReactDOM.createRoot(document.getElementById("root"));   //created root in react

//  root.render(heading);    //rendered heading in root to show it in window




//for nested structures usinng react

/**
 * <div id = "parent">
 *    <div id= "child">
 *       <h1>I am h1 tag </h1>
 *       <h2> I am h2 tag </h2>
 *    </div>
 * </div> 
**/

const parent = React.createElement(
   "div",
   {id : "parent"},
   React.createElement("div", {id: "child"}, [
      React.createElement("h1",{}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
   ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 