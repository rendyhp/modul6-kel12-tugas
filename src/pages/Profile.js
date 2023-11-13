import React from "react";
import "./Profile.css";
const profileData = [
  {
    nama: "Rendy Hartono Putra",
    nim: "21120121130071",
    img:"https://aratamesekai.files.wordpress.com/2023/10/cocoa-1.png?w=1022"
      
  },
  {
    nama: "Ferdy Fernando",
    nim: "21120121130062",
    img:"https://avatars.githubusercontent.com/u/116475964?v=4"  
  },
  {
    nama: "Yuda Nadhika",
    nim: "21120121140088",
    img:"https://avatars.githubusercontent.com/u/26102002?v=4"  
  },
];

function ProfilePage() {
  return (
    <div>
      <h1>Profile</h1>
      <div className="profile-cards">
        {profileData.map((data, index) => (
          <div className="profile-card" key={index}>
            <img src={data.img} alt={data.nama} />
            <h3>{data.nama}</h3>
            <p>{data.nim}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
