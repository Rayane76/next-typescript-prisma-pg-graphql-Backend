

// async function getData(gameId: string) {
//   const { data } = await fetch('http://localhost:3000/api/graphql', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query: `
// query GameQuery($gameId: ID!) {
//   game(id: $gameId) {
//     title
//     reviews {
//       rating
//     }
//   }
// }
//   `,
//   variables: {
//     gameId: gameId,
//   },
//     }),
//   }).then((res) => res.json());
 
//   return data;
//}


export default async function Home() {
   
  // const data = await getData("1");


  return (
    <>
    </>
  );
}
