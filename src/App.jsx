// import React, { useEffect, useState } from 'react'
// import { ZegoSuperBoardManager } from 'zego-superboard-web';
// import {ZegoExpressEngine} from 'zego-express-engine-webrtc'
// import Tools from './Tools';

// function App() {
//   const [currentTool, setCurrentTool] = useState(null);
//   const appID = Number(import.meta.env.VITE_APPID); 
//   const userID = import.meta.env.VITE_USERID;
//   const roomID = import.meta.env.VITE_ROOMID;
//   const userName = import.meta.env.VITE_USERNAME;
//   const token = import.meta.env.VITE_TOKEN;
//   const server = import.meta.env.VITE_SERVER;
  

//   console.log("ZEGOCLOUD ENV VALUES:", appID, userID, server);

//   const zg = new ZegoExpressEngine(appID, server);
//   const zegoSuperBoard = ZegoSuperBoardManager.getInstance();
//   const initBoard = async ()=>{
//     await zegoSuperBoard.init(zg, {
//       parentDomID: 'parentDomID', 
//       appID, 
//       userID, 
//       token 
//   });

//   await zg.loginRoom(roomID, token, {userID, userName}, {userUpdate: true});
//   setCurrentTool(zegoSuperBoard.getToolType())

//   await zegoSuperBoard.createWhiteboardView({
//     name: 'Scribo', 
//     perPageWidth: 1560, 
//     perPageHeight: 900, 
//     pageCount:1 
// });

//   }


// useEffect(()=>{
//   if(zegoSuperBoard){
//     initBoard()
//   }
// },[zegoSuperBoard])

//   return (
//     <div className='h-[100vh] bg-black w-full'>
//       <div id="parentDomID" className='w-full h-full'></div>
//       <Tools currentTool={currentTool} onClick={(tool)=>{
//         zegoSuperBoard.setToolType(tool.type)
//         setCurrentTool(tool.type)
//       }}/>
//     </div>
//   )
// }

// export default App


//-------------------new(1) code-------------------
// import React, { useEffect, useState } from 'react';
// import { ZegoSuperBoardManager } from 'zego-superboard-web';
// import { ZegoExpressEngine } from 'zego-express-engine-webrtc';
// import Tools from './Tools';

// function App() {
//   // ✅ State for current whiteboard tool
//   const [currentTool, setCurrentTool] = useState(null);

//   // ✅ Load env variables
//   const appID = Number(import.meta.env.VITE_APPID); 
//   const userID = import.meta.env.VITE_USERID;
//   const roomID = import.meta.env.VITE_ROOMID;
//   const userName = import.meta.env.VITE_USERNAME;
//   const token = import.meta.env.VITE_TOKEN;
//   const server = import.meta.env.VITE_SERVER;

//   console.log("ZEGOCLOUD ENV VALUES:", appID, userID, server);

//   // ✅ Initialize Zego engine and whiteboard manager
//   const zg = new ZegoExpressEngine(appID, server);
//   const zegoSuperBoard = ZegoSuperBoardManager.getInstance();

//   const initBoard = async () => {
//     try {
//       // Initialize SuperBoard
//       await zegoSuperBoard.init(zg, {
//         parentDomID: 'parentDomID',
//         appID,
//         userID,
//         token
//       });

//       // Login to ZEGOCLOUD room
//       await zg.loginRoom(roomID, token, { userID, userName }, { userUpdate: true });

//       // Set initial tool from the board
//       setCurrentTool(zegoSuperBoard.getToolType());

//       // Create a new whiteboard page
//       await zegoSuperBoard.createWhiteboardView({
//         name: 'Scribo',
//         perPageWidth: 1560,
//         perPageHeight: 900,
//         pageCount: 1
//       });

//     } catch (error) {
//       console.error("Error initializing board:", error);
//     }
//   };

//   // ✅ Initialize when component mounts
//   useEffect(() => {
//     if (zegoSuperBoard) {
//       initBoard();
//     }
//   }, [zegoSuperBoard]);

//   return (
//     <div className="h-[100vh] bg-black w-full">
//       {/* Whiteboard container */}
//       <div id="parentDomID" className="w-full h-full"></div>

//       {/* Tools Component */}
//       <Tools
//         currentTool={currentTool}
//         onClick={(tool) => {
//           zegoSuperBoard.setToolType(tool.type);
//           setCurrentTool(tool.type);
//         }}
//       />
//     </div>
//   );
// }

// export default App;


//-------------------new(2) code-------------------
import React, { useEffect, useState } from 'react';
import { ZegoSuperBoardManager } from 'zego-superboard-web';
import { ZegoExpressEngine } from 'zego-express-engine-webrtc';
import Tools from './Tools';

function App() {
  const appID = Number(import.meta.env.VITE_APPID);
  const userID = import.meta.env.VITE_USERID;
  const roomID = import.meta.env.VITE_ROOMID;
  const userName = import.meta.env.VITE_USERNAME;
  const token = import.meta.env.VITE_TOKEN;
  const server = import.meta.env.VITE_SERVER;

  const [currentTool, setCurrentTool] = useState(null);

  console.log("ZEGOCLOUD ENV VALUES:", appID, userID, server);

  useEffect(() => {
    const initBoard = async () => {
      try {
        const zg = new ZegoExpressEngine(appID, server);
        const zegoSuperBoard = ZegoSuperBoardManager.getInstance();

        await zegoSuperBoard.init(zg, {
          parentDomID: 'parentDomID',
          appID,
          userID,
          token
        });

        // Wait for room login before creating board
        await zg.loginRoom(roomID, token, { userID, userName }, { userUpdate: true });

        setCurrentTool(zegoSuperBoard.getToolType());

        await zegoSuperBoard.createWhiteboardView({
          name: 'Scribo',
          perPageWidth: 1560,
          perPageHeight: 900,
          pageCount: 1
        });

      } catch (error) {
        console.error("Whiteboard init error:", error);
      }
    };

    initBoard();
  }, []);

  return (
    <div className='h-[100vh] bg-black w-full'>
      {/* Whiteboard container */}
      <div id="parentDomID" className='w-full h-full'></div>

      {/* Tool panel */}
      <Tools
        currentTool={currentTool}
        onClick={(tool) => {
          const zegoSuperBoard = ZegoSuperBoardManager.getInstance();
          zegoSuperBoard.setToolType(tool.type);
          setCurrentTool(tool.type);
        }}
      />
    </div>
  );
}

export default App;
