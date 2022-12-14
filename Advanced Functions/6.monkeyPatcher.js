function name(params) {

    const obj = {
        id: 10,
        author: 'P',
        content: ' dfd',
        upvotes: 5,
        downvotes: 10
    };
    // nasoki
function test() {
    this.upvotes += 10;
}
console.log(obj);
test.call(obj);
console.log(obj);
// dostypwa i promenq obj



}