import _db from "@/app/_db";
import prisma from "@/app/lib/prisma";

const resolvers = {

  Query: {
    games: async () => {
      return await prisma.game.findMany();
    },
    authors: async () => {
      return await prisma.author.findMany();
    },
    reviews: async () => {
      return await prisma.review.findMany();
    },
    review: async (_:any,args:any) => {
      return await prisma.review.findUnique({
        where: {
          id: args.id
        },
      });
    },
    game: async (_:any,args:any) => {
      return await prisma.game.findUnique({
        where: {
          id: args.id
        },
      });
    },
    author: async (_:any,args:any) => {
      return await prisma.author.findUnique({
        where: {
          id: args.id
        },
      });    },
    authorsverified: async(_:any,args:any) => {
      return await prisma.author.findMany({
        where: {
          verified: args.verified
        },
      });    }
      
  },
  Game: {
      reviews: async (parent:any) => {
        return prisma.review.findMany({
          where: {
            gameId: parent.id
          }
        })
      }
  },
  Review: {
    game: async (parent:any) => {
      return prisma.game.findUnique({
        where: {
          id: parent.gameId
        }
      })
    },
    author: async(parent:any) => {
      return prisma.author.findUnique({
        where: {
          id: parent.authorId
        }
      })
    }
  },
  Author: {
    reviews: async (parent:any) => {
      return await prisma.review.findMany({
        where: {
          authorId: parent.id
        }
      })
    }
  },

  Mutation: {
    deleteGame: async (_:any,args:any) => {
      _db.games = _db.games.filter((game)=> game.id !== args.id);

      return _db.games;
    },
    addGame: async (_:any,args:any) => {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString()
      }
      _db.games.push(game)

      return game
    },
    updateGame: async(_:any, args:any) => {
      _db.games = _db.games.map((g) => {
        if (g.id === args.id) {
          return {...g, ...args.edits}
        }

        return g
      })

      return _db.games.find((g) => g.id === args.id)
    }
  }

  };
  
  export default resolvers;