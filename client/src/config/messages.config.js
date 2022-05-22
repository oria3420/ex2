import db, { KATES_IMAGE } from "./db.config"

//***chats carly***

const chatCarlyBob = [
    {
      timestamp: '19/04/2022 16:56:30',
      username: 'carly',
      image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
    },
    {
      content : "Nice pic",
      timestamp: '19/04/2022 16:58:30',
      username: 'bob',
      
    },
    {
      content : "Thanks!",
      timestamp: '19/04/2022 17:00:30',
      username: 'carly',
      
    }
  ]
  
  const chatCarlyEli = [
    {
      video:"https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
      timestamp: '19/04/2022 16:56:30',
      username: 'carly',
      
    },
    {
      content : "What is that?",
      timestamp: '19/04/2022 16:58:30',
      username: 'eli',
      
    },
    {
      content : "Watch the video",
      timestamp: '19/04/2022 17:00:30',
      username: 'carly',
      
    }
  ]
  
  const chatCarlyKate = [
    {
      audio : "https://file-examples.com/storage/fef12739526267ac9a2b543/2017/11/file_example_MP3_700KB.mp3",
      timestamp: '20/04/2022 16:56:30',
      username: 'kate',
      
    },
    {
      content : "That's a nice melody!",
      timestamp: '20/04/2022 16:58:30',
      username: 'carly',
      
    },
    {
      content : "What do you think?",
      timestamp: '20/04/2022 17:00:30',
      username: 'kate',
      
    },
    {
      content : "We should play it tonight at the party",
      timestamp: '20/04/2022 17:02:30',
      username: 'carly',
      
    }
  ]
  
  const chatCarlyJames = [
    {
      content : "Let's order food",
      timestamp: '20/04/2022 16:56:30',
      username: 'carly',
      
    },
    {
      content : "What food?",
      timestamp: '20/04/2022 16:58:30',
      username: 'james',
      
    },
    {
      content : "How about sushi?",
      timestamp: '20/04/2022 17:00:30',
      username: 'carly',
      
    }
  ]

  const chatCarlyCody = [
    {
      content : "Good morning!!:)",
      timestamp: '23/04/2022 16:56:30',
      username: 'cody',
      image: '',
    },
    {
      content : "Morning",
      timestamp: '23/04/2022 16:58:30',
      username: 'carly',
      
    },
    {
      content : "Do you want to go on a trip?",
      timestamp: '23/04/2022 17:00:30',
      username: 'cody',
      
    },{
      content : "Sure!",
      timestamp: '23/04/2022 17:15:30',
      username: 'carly',
    }
  ]

  //***chats bob***
  
  const chatBobELi = [
    {
      timestamp: '19/04/2022 16:56:30',
      username: 'eli',
      image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
    },
    {
      content : "Nice pic",
      timestamp: '19/04/2022 16:58:30',
      username: 'bob',
      
    },
    {
      content : "Thanks!",
      timestamp: '19/04/2022 17:00:30',
      username: 'eli',
      
    }
  ]
  
  const chatBobKate = [
    {
      audio : "https://file-examples.com/storage/fef12739526267ac9a2b543/2017/11/file_example_MP3_700KB.mp3",
      timestamp: '20/04/2022 16:56:30',
      username: 'kate',
      
    },
    {
      content : "That's a nice melody!",
      timestamp: '20/04/2022 16:58:30',
      username: 'bob',
      
    },
    {
      content : "What do you think?",
      timestamp: '20/04/2022 17:00:30',
      username: 'kate',
      
    },
    {
      content : "We should play it tonight at the party",
      timestamp: '20/04/2022 17:02:30',
      username: 'bob',
      
    }
  ]
  
  const chatBobJames = [
    {
      content : "Let's order food",
      timestamp: '20/04/2022 16:56:30',
      username: 'bob',
      
    },
    {
      content : "What food?",
      timestamp: '20/04/2022 16:58:30',
      username: 'james',
      
    },
    {
      content : "How about sushi?",
      timestamp: '20/04/2022 17:00:30',
      username: 'bob',
      
    }
  ]

  const chatBobCody = [
    {
      content : "Good morning!!:)",
      timestamp: '23/04/2022 16:56:30',
      username: 'cody',
    },
    {
      content : "Morning",
      timestamp: '23/04/2022 16:58:30',
      username: 'bob',
      
    },
    {
      content : "Do you want to go on a trip?",
      timestamp: '23/04/2022 17:00:30',
      username: 'cody',
      
    },{
      content : "Sure!",
      timestamp: '23/04/2022 17:15:30',
      username: 'bob',
    }
  ]

  //***chats eli***
  
  const chatEliKate = [
    {
      audio : "https://file-examples.com/storage/fef12739526267ac9a2b543/2017/11/file_example_MP3_700KB.mp3",
      timestamp: '20/04/2022 16:56:30',
      username: 'kate',
      
    },
    {
      content : "That's a nice melody!",
      timestamp: '20/04/2022 16:58:30',
      username: 'eli',
      
    },
    {
      content : "What do you think?",
      timestamp: '20/04/2022 17:00:30',
      username: 'kate',
      
    },
    {
      content : "We should play it tonight at the party",
      timestamp: '20/04/2022 17:02:30',
      username: 'eli',
      
    }
  ]
  
  const chatEliJames = [
    {
      content : "Let's order food",
      timestamp: '20/04/2022 16:56:30',
      username: 'eli',
      
    },
    {
      content : "What food?",
      timestamp: '20/04/2022 16:58:30',
      username: 'james',
      
    },
    {
      content : "How about sushi?",
      timestamp: '20/04/2022 17:00:30',
      username: 'eli',
      
    }
  ]

  const chatEliCody = [
    {
      content : "Good morning!!:)",
      timestamp: '23/04/2022 16:56:30',
      username: 'cody',
    },
    {
      content : "Morning",
      timestamp: '23/04/2022 16:58:30',
      username: 'eli',
      
    },
    {
      content : "Do you want to go on a trip?",
      timestamp: '23/04/2022 17:00:30',
      username: 'cody',
      
    },{
      content : "Sure!",
      timestamp: '23/04/2022 17:15:30',
      username: 'eli',
    }
  ]

  //***chats kate***

  const chatKateBob=[
    {
      video:"https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
      timestamp: '19/04/2022 16:56:30',
      username: 'bob',
      
    },
    {
      content : "What is that?",
      timestamp: '19/04/2022 16:58:30',
      username: 'kate',
      
    },
    {
      content : "Watch the video",
      timestamp: '19/04/2022 17:00:30',
      username: 'bob',
      
    }
  ]

  const chatKateCarly = [
    {
      timestamp: '19/04/2022 16:56:30',
      username: 'kate',
      image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
    },
    {
      content : "Nice pic",
      timestamp: '19/04/2022 16:58:30',
      username: 'carly',
      
    },
    {
      content : "Thanks!",
      timestamp: '19/04/2022 17:00:30',
      username: 'kate',
      
    }
  ]
  
  const chatKateJames = [
    {
      content : "Let's order food",
      timestamp: '20/04/2022 16:56:30',
      username: 'kate',
      
    },
    {
      content : "What food?",
      timestamp: '20/04/2022 16:58:30',
      username: 'james',
      
    },
    {
      content : "How about sushi?",
      timestamp: '20/04/2022 17:00:30',
      username: 'kate',
      
    }
  ]

  const chatKateCody = [
    {
      content : "Good morning!!:)",
      timestamp: '23/04/2022 16:56:30',
      username: 'cody',
    },
    {
      content : "Morning",
      timestamp: '23/04/2022 16:58:30',
      username: 'kate',
      
    },
    {
      content : "Do you want to go on a trip?",
      timestamp: '23/04/2022 17:00:30',
      username: 'cody',
      
    },{
      content : "Sure!",
      timestamp: '23/04/2022 17:15:30',
      username: 'kate',
    }
  ]

    //***chats james***

    const chatJamesEli = [
      {
        audio : "https://file-examples.com/storage/fef12739526267ac9a2b543/2017/11/file_example_MP3_700KB.mp3",
        timestamp: '20/04/2022 16:56:30',
        username: 'eli',
        
      },
      {
        content : "That's a nice melody!",
        timestamp: '20/04/2022 16:58:30',
        username: 'james',
        
      },
      {
        content : "What do you think?",
        timestamp: '20/04/2022 17:00:30',
        username: 'eli',
        
      },
      {
        content : "We should play it tonight at the party",
        timestamp: '20/04/2022 17:02:30',
        username: 'james',
        
      }
    ]
    

    const chatJamesBob=[
      {
        video:"https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
        timestamp: '19/04/2022 16:56:30',
        username: 'bob',
        
      },
      {
        content : "What is that?",
        timestamp: '19/04/2022 16:58:30',
        username: 'james',
        
      },
      {
        content : "Watch the video",
        timestamp: '19/04/2022 17:00:30',
        username: 'bob',
        
      }
    ]
  
    const chatJamesCarly = [
      {
        timestamp: '19/04/2022 16:56:30',
        username: 'james',
        image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
      },
      {
        content : "Nice pic",
        timestamp: '19/04/2022 16:58:30',
        username: 'carly',
        
      },
      {
        content : "Thanks!",
        timestamp: '19/04/2022 17:00:30',
        username: 'james',
        
      }
    ]
  
    const chatJamesCody = [
      {
        content : "Good morning!!:)",
        timestamp: '23/04/2022 16:56:30',
        username: 'cody',
      },
      {
        content : "Morning",
        timestamp: '23/04/2022 16:58:30',
        username: 'james',
        
      },
      {
        content : "Do you want to go on a trip?",
        timestamp: '23/04/2022 17:00:30',
        username: 'cody',
        
      },{
        content : "Sure!",
        timestamp: '23/04/2022 17:15:30',
        username: 'james',
      }
    ]

//***chats cody***

const chatCodyBob = [
  {
    timestamp: '19/04/2022 16:56:30',
    username: 'cody',
    image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
  },
  {
    content : "Nice pic",
    timestamp: '19/04/2022 16:58:30',
    username: 'bob',
    
  },
  {
    content : "Thanks!",
    timestamp: '19/04/2022 17:00:30',
    username: 'cody',
    
  }
]

const chatCodyEli = [
  {
    video:"https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    timestamp: '19/04/2022 16:56:30',
    username: 'cody',
    
  },
  {
    content : "What is that?",
    timestamp: '19/04/2022 16:58:30',
    username: 'eli',
    
  },
  {
    content : "Watch the video",
    timestamp: '19/04/2022 17:00:30',
    username: 'cody',
    
  }
]

const chatCodyKate = [
  {
    audio : "https://file-examples.com/storage/fef12739526267ac9a2b543/2017/11/file_example_MP3_700KB.mp3",
    timestamp: '20/04/2022 16:56:30',
    username: 'kate',
    
  },
  {
    content : "That's a nice melody!",
    timestamp: '20/04/2022 16:58:30',
    username: 'cody',
    
  },
  {
    content : "What do you think?",
    timestamp: '20/04/2022 17:00:30',
    username: 'kate',
    
  },
  {
    content : "We should play it tonight at the party",
    timestamp: '20/04/2022 17:02:30',
    username: 'cody',
    
  }
]

const chatCodyJames = [
  {
    content : "Let's order food",
    timestamp: '20/04/2022 16:56:30',
    username: 'cody',
    
  },
  {
    content : "What food?",
    timestamp: '20/04/2022 16:58:30',
    username: 'james',
    
  },
  {
    content : "How about sushi?",
    timestamp: '20/04/2022 17:00:30',
    username: 'cody',
    
  }
]

  export const STATIC_CHATS = [
    { nickname: "Bob",
      username: 'bob',
      msgWith: 'carly',
      chat: chatCarlyBob},
    { nickname: "Eli",
      username: 'eli',
      msgWith: 'carly',
      chat: chatCarlyEli},
    { nickname: "James",
      username: 'james',
      msgWith: 'carly',
      chat: chatCarlyJames},
      {nickname: "Kate",
       username: 'kate',
       msgWith: 'carly',
      chat: chatCarlyKate},
      {nickname: "Cody",
       username: 'cody',
       msgWith: 'carly',
       chat: chatCarlyCody},

       {nickname: "Carly",
        username: 'carly',
        msgWith: 'bob',
        chat: chatCarlyBob},
        { nickname: "Eli",
        username: 'eli',
        msgWith: 'bob',
        chat: chatBobELi},
      { nickname: "James",
        username: 'james',
        msgWith: 'bob',
        chat: chatBobJames},
        {nickname: "Kate",
         username: 'kate',
         msgWith: 'bob',
        chat: chatBobKate},
        {nickname: "Cody",
         username: 'cody',
         msgWith: 'bob',
         chat: chatBobCody},

         {nickname: "Carly",
         username: 'carly',
         msgWith: 'eli',
         chat: chatCarlyEli},
         { nickname: "Bob",
         username: 'bob',
         msgWith: 'eli',
         chat: chatBobELi},
       { nickname: "James",
         username: 'james',
         msgWith: 'eli',
         chat: chatEliJames},
         {nickname: "Kate",
          username: 'kate',
          msgWith: 'eli',
         chat: chatEliKate},
         {nickname: "Cody",
          username: 'cody',
          msgWith: 'eli',
          chat: chatEliCody},

          {nickname: "Carly",
          username: 'carly',
          msgWith: 'kate',
          chat: chatKateCarly},
          { nickname: "Bob",
          username: 'bob',
          msgWith: 'kate',
          chat: chatKateBob},
        { nickname: "James",
          username: 'james',
          msgWith: 'kate',
          chat: chatKateJames},
          {nickname: "Eli",
           username: 'eli',
           msgWith: 'kate',
          chat: chatEliKate},
          {nickname: "Cody",
           username: 'cody',
           msgWith: 'kate',
           chat: chatKateCody},

           {nickname: "Carly",
           username: 'carly',
           msgWith: 'james',
           chat: chatJamesCarly},
           { nickname: "Bob",
           username: 'bob',
           msgWith: 'james',
           chat: chatJamesBob},
         { nickname: "Kate",
           username: 'kate',
           msgWith: 'james',
           chat: chatKateJames},
           {nickname: "Eli",
            username: 'eli',
            msgWith: 'james',
           chat: chatJamesEli},
           {nickname: "Cody",
            username: 'cody',
            msgWith: 'james',
            chat: chatJamesCody},

            { nickname: "Bob",
            username: 'bob',
            msgWith: 'cody',
            chat: chatCodyBob},
          { nickname: "Eli",
            username: 'eli',
            msgWith: 'cody',
            chat: chatCodyEli},
          { nickname: "James",
            username: 'james',
            msgWith: 'cody',
            chat: chatCodyJames},
            {nickname: "Kate",
             username: 'kate',
             msgWith: 'cody',
            chat: chatCodyKate},
            {nickname: "Carly",
             username: 'carly',
             msgWith: 'cody',
             chat: chatCarlyCody},
      ] 

export const GenerateChatContact = (user, currentUserName, chat) => {
  if(chat.length > 0 ){
  const lastMsg = chat.at(-1)
  return {
    nickname: user.nickname,
    username: user.username,
    msgWith: currentUserName,
    chat: chat,
    image: user.image,
    lastMessage: lastMsg.content,
    lastMessageTime: lastMsg.timestamp
  }
  }
  return {
    nickname: user.nickname,
    username: user.username,
    msgWith: currentUserName,
    chat: chat,
    image: user.image,
  }
}

export const GENERATE_CHATS = (currentUser) => {
  const contacts = db
  const Chat = []
  contacts.forEach(user => {
    STATIC_CHATS.forEach(chat => {
      if(currentUser.username === chat.msgWith && user.username === chat.username){
        const obj = GenerateChatContact(user, currentUser.username, chat.chat)
        Chat.push(obj)
      }
    })
    
  })
  return Chat;
}
