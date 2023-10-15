import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AMSAssessment from "./pages/AMSAssessment";
import ApplicationManagement from "./pages/ApplicationManagement";
import BusinessProcesses from "./pages/BusinessProcesses";
import CommunicationCollaboration from "./pages/CommunicationCollaboration";
import ContractingAndLegalCompliance from "./pages/ContractingAndLegalCompliance";
import CostingAndBudgeting from "./pages/CostingAndBudgeting";
import CSIPAndTransformation from "./pages/CSIPAndTransformation";
import EndUserComputing from "./pages/EndUserComputing";
import Estimation from "./pages/Estimation";
import HandoverFromSalesToDelivery from "./pages/HandoverFromSalesToDelivery";
import InformationSecurity from "./pages/InformationSecurity";
import InfrastructureAssessment from "./pages/InfrastructureAssessment";
import ITSMCapabilities from "./pages/ITSMCapabilities";
import OpportunityQualification from "./pages/OpportunityQualification";
import RfiToRfpResponseManagement from "./pages/RfiToRfpResponseManagement";
import RisksAndIssues from "./pages/RisksAndIssues";
import Transition from "./pages/Transition";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="flex h-screen">
        <nav className="flex flex-col border-r-2 max-h-screen bg-slate-200 px-6 text-white divide-y divide-slate-600">
          <div className="my-4">
            <img src="/Cleverex-Logo.png" className="w-48"></img>
          </div>
          <div className="text-black pt-4">
            <Link to={"/"} className="flex underline-offset-0 items-end">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
                className="mr-4"
              >
                <path d="M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
              </svg>
              <h1 className="font-bold">Home</h1>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/amsassessment"
            element={<AMSAssessment></AMSAssessment>}
          />
          <Route
            path="/applicationmanagement"
            element={<ApplicationManagement></ApplicationManagement>}
          ></Route>
          <Route
            path="/businessprocesses"
            element={<BusinessProcesses></BusinessProcesses>}
          ></Route>
          <Route
            path="/communicationandcollaboration"
            element={<CommunicationCollaboration></CommunicationCollaboration>}
          ></Route>
          <Route
            path="/contractingandlegalcompliance"
            element={
              <ContractingAndLegalCompliance></ContractingAndLegalCompliance>
            }
          ></Route>
          <Route
            path="/costingandbudgeting"
            element={<CostingAndBudgeting></CostingAndBudgeting>}
          ></Route>
          <Route
            path="/csipandtransformation"
            element={<CSIPAndTransformation></CSIPAndTransformation>}
          ></Route>
          <Route
            path="/endusercomputing"
            element={<EndUserComputing></EndUserComputing>}
          ></Route>
          <Route path="/estimation" element={<Estimation></Estimation>}></Route>
          <Route
            path="/handoverfromsalestodelivery"
            element={
              <HandoverFromSalesToDelivery></HandoverFromSalesToDelivery>
            }
          ></Route>
          <Route
            path="/informationsecurity"
            element={<InformationSecurity></InformationSecurity>}
          ></Route>
          <Route
            path="/infrastructureassessment"
            element={<InfrastructureAssessment></InfrastructureAssessment>}
          ></Route>
          <Route
            path="/assessments/:id"
            element={<ITSMCapabilities></ITSMCapabilities>}
          ></Route>
          <Route
            path="/opportunityqualification"
            element={<OpportunityQualification></OpportunityQualification>}
          ></Route>
          <Route
            path="/rfitorfpresponsemanagement"
            element={<RfiToRfpResponseManagement></RfiToRfpResponseManagement>}
          ></Route>
          <Route
            path="/risksandissues"
            element={<RisksAndIssues></RisksAndIssues>}
          ></Route>
          <Route path="/transition" element={<Transition></Transition>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
