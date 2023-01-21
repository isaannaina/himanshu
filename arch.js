///part one==>

console.log('person1: shows ticket')
console.log('person2: shows ticket')
const premovie = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const popcorn1= new Promise((resolve,reject)=>resolve('ticket'))
  const getbutter= new Promise((resolve,reject)=>resolve('butter'))
  const getcolddrink= new Promise((resolve,reject)=>resolve('colddrink'))
  
  let ticket = await promise;
  console.log('wife: have the tickets')
    console.log('husband: we should go in')
  console.log('wife: no i am hungry')
  let popcorn=await popcorn1
    console.log('husband: i get the popcorn')
  console.log('husband: we should go in')
  console.log('wife: i need some butter on my popcorn')
  let butter=await getbutter
  console.log('husband:i got some butter')
  let drink= await getcolddrink
    console.log('wife: get colddrink as well')
  console.log('husband: okk jaaan')
    console.log('husband: here is your colddrink')

  return ticket 
}
premovie().then((m) => console.log('person 3 show'+m))
console.log('person4: shows ticket')
console.log('person5: shows ticket')
////////part 2
const posts = [
    {title: 'Post one', body: 'This is a post one', createdAt: new Date()},
    {title: 'Post two', body: 'This is a post two', createdAt: new Date()}
];

async function getPost() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  let output = "";
  const currentTimestamp = new Date();
  posts.forEach((post, index) => {
    const secondsAgo = (currentTimestamp - post.createdAt) / 1000;
    output += `Post ${index + 1} created ${secondsAgo.toFixed(0)} seconds ago `;
  });
  console.log(output)
}

async function createPost(post) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  post.createdAt = new Date();
  posts.push(post);
}

async function deletePost(index) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  if (index >= 0 && index < posts.length) {
    posts.splice(index, 1);
  } else {
    throw new Error("Invalid post index");
  }
}

const promise1 = Promise.resolve("workd");
const promise2 = Promise.resolve(10);
const promise3 = Promise.resolve("goodbye");

async function example(){
  const values = await Promise.all([promise1, promise2, promise3]);
  console.log(values);
}

example()
