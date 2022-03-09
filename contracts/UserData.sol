// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract UserData{
    struct userinfo{
        string name;
        string irla;
        string ipfshash;
        string mobile;
        string emailid;
    }
    
    userinfo[] public userinfos;
    uint256 public totalUserinfo;
    
    constructor() public{
       totalUserinfo = 0;
   }
   
   
   event UserAdded(
        string name,
        string irla,
        string ipfshash,
        string mobile,
        string emailid
       );
       
    event MobileUpdated(string irla, string mobile);
    event EmailUpdated(string irla, string emailid);
    
    function insertData(string memory name, string memory irla, string memory ipfshash, string memory mobile, string memory emailid) public returns(uint256 _totalUserinfo){
        require(bytes(ipfshash).length > 0);
        require(bytes(name).length > 0);
        require(bytes(irla).length > 0);
        require(bytes(mobile).length > 0);
        require(bytes(emailid).length > 0);
        
        userinfo memory newUserInfo = userinfo(name, irla, ipfshash, mobile, emailid);
        userinfos.push(newUserInfo);
        totalUserinfo++;
        //emit event
        emit UserAdded (name, irla, ipfshash, mobile, emailid);
        return totalUserinfo;
        
    }
    
    function getData(string memory irla) public view returns(string memory name, string memory ipfshash, string memory mobile, string memory emailid){
        for(uint256 i =0; i< totalUserinfo; i++){
           if(compareStrings(userinfos[i].irla, irla)){
              //emit event
              return (userinfos[i].name , userinfos[i].ipfshash , userinfos[i].mobile, userinfos[i].emailid);
           }
       }
       revert('user not found');
   }
   

   
   function updateMobile(string memory irla, string memory newMobile) public returns (bool success){
       //This has a problem we need loop
       for(uint256 i =0; i< totalUserinfo; i++){
            if(compareStrings(userinfos[i].irla, irla)){
              userinfos[i].mobile = newMobile;
              emit MobileUpdated(irla, newMobile);
              return true;
           }
       }
       return false;
   }
   
   
   function updateEmail(string memory irla, string memory newEmail) public returns (bool success){
       //This has a problem we need loop
       for(uint256 i =0; i< totalUserinfo; i++){
            if(compareStrings(userinfos[i].irla, irla)){
              userinfos[i].emailid = newEmail;
              emit EmailUpdated(irla, newEmail);
              return true;
           }
       }
       return false;
   }
   
      function compareStrings (string memory a, string memory b)  internal pure returns (bool){
       return (keccak256(abi.encode(a)) == keccak256(abi.encode(b)));
   }
}
