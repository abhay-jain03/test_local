import React from "react";
import "./Test12.css";

function Test12() {
  const starimg = [
    "https://cdn.zeplin.io/5da0780780829f083448125a/assets/E8C92954-9D92-4849-99A6-30726E3E7815.png",
  ];
  const STAR = starimg.map((STAR) => {
    return (
      <div>
        <img src={STAR} />
        <img src={STAR} />
        <img src={STAR} />
        <img src={STAR} />
        <img src={STAR} />
      </div>
    );
  });

  return (
    <div>
      <h1>Abhay</h1>
      <div>{STAR}</div>
    </div>
  );
}

export default Test12;

// export const ScaleRating = ({
//   spacing,
//   totalRating,
//   heading,
//   giveRating,
//   getRating,
//   addClass,
//   status,
// }) => {
//   return (
//     <div>
//       <div>Abhay</div>
//       <div className="heading-12-co servicing-experience-co">{heading}</div>
//       <div className="heading-12-co">
//         <div className="scaleRatingMain" id="allratingbutton">
//           {[...Array(totalRating)].map((rate, index) => {
//             return (
//               <div
//                 className={`heading-${spacing}-co  ratingButtonPad  btn-group firstRating`}
//                 key={index}
//               >
//                 <input
//                   type="button"
//                   id="remark"
//                   value={index + 1}
//                   className={
//                     status === true
//                       ? getRating === index + 1
//                         ? `btn-group ${addClass} ratingButton`
//                         : `btn-group ratingButton`
//                       : getRating === index + 1
//                       ? `btn-group  ${addClass}${
//                           index + 1
//                         }  ratingOutline ratingButton`
//                       : `btn-group ${addClass}${index + 1} ratingButton`
//                   }
//                   onClick={
//                     status === false
//                       ? () => {
//                           giveRating(index + 1);
//                         }
//                       : () => {}
//                   }
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
