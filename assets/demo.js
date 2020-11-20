function init() {
    console.log("Initiated")
    if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this

    var $ = go.GraphObject.make;  // for conciseness in defining templates

    var myDiagram = $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
        {
            "undoManager.isEnabled": true  // enable undo & redo
        });



    var myModel = $(go.Model);
    // for each object in this Array, the Diagram creates a Node to represent it
    myModel.nodeDataArray = [
        { key: "Alpha" },
        { key: "Beta" },
        { key: "Gamma" }
    ];
    myDiagram.model = myModel;

    // myDiagram.model = new go.GraphLinksModel(
    //     [{ key: "Hello" },   // two node data, in an Array
    //      { key: "World!" }],
    //     [{ from: "Hello", to: "World!"}]  // one link data, in an Array
    //   );

    // myDiagram.nodeTemplate =
    // $(go.Node, "Vertical", // second argument of a Node (or any Panel) can be a Panel type
    //   /* set Node properties here */
    //   { // the Node.location point will be at the center of each node
    //     locationSpot: go.Spot.Center
    //   },

    //   /* add Bindings here */
    //   // example Node binding sets Node.location to the value of Node.data.loc
    //   new go.Binding("location", "loc"),

    //   /* add GraphObjects contained within the Node */
    //   // this Shape will be vertically above the TextBlock
    //   $(go.Shape,
    //     "RoundedRectangle", // string argument can name a predefined figure
    //     { /* set Shape properties here */ },
    //     // example Shape binding sets Shape.figure to the value of Node.data.fig
    //     new go.Binding("figure", "fig")),

    //   $(go.TextBlock,
    //     "default text",  // string argument can be initial text string
    //     { /* set TextBlock properties here */ },
    //     // example TextBlock binding sets TextBlock.text to the value of Node.data.text
    //     new go.Binding("text"))
    // );




    // // define a simple Node template
    // myDiagram.nodeTemplate =
    //     $(go.Node, "Horizontal",
    //         // the entire node will have a light-blue background
    //         { background: "#44CCFF" },
    //         $(go.Picture,
    //             // Pictures should normally have an explicit width and height.
    //             // This picture has a red background, only visible when there is no source set
    //             // or when the image is partially transparent.
    //             { margin: 10, width: 50, height: 50, background: "red" },
    //             // Picture.source is data bound to the "source" attribute of the model data
    //             new go.Binding("source")),
    //         $(go.TextBlock,
    //             "Default Text",  // the initial value for TextBlock.text
    //             // some room around the text, a larger font, and a white stroke:
    //             { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
    //             // TextBlock.text is data bound to the "name" property of the model data
    //             new go.Binding("text", "name"))
    //     );

    // var model = $(go.Model);
    // model.nodeDataArray =
    //     [ // note that each node data object holds whatever properties it needs;
    //         // for this app we add the "name" and "source" properties
    //         { name: "Don Meow", source: "assets/cat1.jfif" },
    //         { name: "Copricat", source: "assets/cat2.jfif" },
    //         { name: "Demeter", source: "assets/cat3.jfif" },
    //         { /* Empty node data */ }
    //     ];

    // myDiagram.model = model;


    // A TreeModel works a little differently. Instead of maintaining a 
    // separate array of link data, the links in a tree model are created
    //  by specifying a "parent" for a node data. Links are then created 
    //  from this association.  



 

    // the template we defined earlier
    myDiagram.nodeTemplate =
        $(go.Node, "Horizontal",
            { background: "#44CCFF" },
            $(go.Picture,
                { margin: 10, width: 50, height: 50, background: "red" },
                new go.Binding("source")),
            $(go.TextBlock, "Default Text",
                { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
                new go.Binding("text", "name"))
        );

    var model = $(go.TreeModel);
    model.nodeDataArray =
        [ // the "key" and "parent" property names are required,
            // but you can add whatever data properties you need for your app
            { key: "1", name: "Don Meow", source: "assets/cat1.jfif" },
            { key: "2", parent: "1", name: "Demeter", source: "assets/cat2.jfif" },
            { key: "3", parent: "1", name: "Copricat", source: "assets/cat3.jfif" },
            { key: "4", parent: "3", name: "Jellylorum", source: "assets/cat4.jfif" },
            { key: "5", parent: "3", name: "Alonzo", source: "assets/cat5.jfif" },
            { key: "6", parent: "2", name: "Munkustrap", source: "assets/cat6.jfif" }
        ];
    myDiagram.model = model;


}