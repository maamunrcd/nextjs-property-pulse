import React from "react";
import InfoBox from "@/components/InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Borwse Property",
              link: "/properties",
              backgorundColor: "bg-black",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgorundColor: "bg-blue-500",
            }}
          >
            List your properties and reach potential tenants. Rent as an
            airbnb or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
