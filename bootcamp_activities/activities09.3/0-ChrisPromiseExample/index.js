function who() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🤡');
    }, 1000);
  });
}

function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('lurks');
    }, 1300);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('in the shadows');
    }, 500);
  });
}

async function msg() {
  const a = await who();
  console.log(a);
  const b = await what();
  console.log(b);
  const c = await where();
  console.log(c);

  console.log(`${ a } ${ b } ${ c }`);
}

msg();