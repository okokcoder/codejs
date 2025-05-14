const coding = ["js", "rb", "java"]

// coding.forEach(val => {
//              console.log(val);
    
// });

// function printMe(item, index, arr) {
//     console.log(item, index, arr);
    
// }
// coding.forEach(printMe)

const langs = [
    {
        langName: "py",
        fileName: "mongo"
    },
    {
        langName: "js",
        fileName: "react"
    },
    {
        langName: "py",
        fileName: "pandas"
    }
]
langs.forEach(item => { 
    console.log(item.langName);
    
});