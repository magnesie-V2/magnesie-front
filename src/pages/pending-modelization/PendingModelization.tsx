import { useParams } from "react-router-dom";
import Terminal from "../../components/pending-modelization/Terminal";

const PendingModelization = () => {
  // graph grafana seduce with production ? Insert Iframe
  const { id } = useParams();
  console.log(id);
  const modelizationName = "Turtle";
  const lines = [
    "03/22 08:52:50 TRACE :.......event_establishSessionSend: found",
    "outgoing if=9.67.116.98 through forward engine 03/22 08:52:50",
    "TRACE :......rsvp_event_mapSession: Session=9.67.116.99:1047:6",
    "exists 12 03/22 08:52:50 EVENT :.....api_reader: api request",
    "SENDER 13 03/22 08:52:50 INFO :.......init_policyAPI: papi_debug:",
    "Entering 03/22 08:52:50 INFO :.......init_policyAPI: papi_debug:",
    "papiLogFunc = 98681F0 papiUserValue = 0 03/22 08:52:50 INFO",
    ":.......init_policyAPI: papi_debug: Exiting 03/22 08:52:50 INFO",
    ":.......init_policyAPI: APIInitialize: Entering 03/22 08:52:50",
    "INFO :.......init_policyAPI: open_socket: Entering 03/22 08:52:50",
    "INFO :.......init_policyAPI: open_socket: Exiting 03/22 08:52:50",
    "INFO :.......init_policyAPI: APIInitialize: ApiHandle = 98BDFB0",
    "connfd = 22 03/22 08:52:50 INFO :.......init_policyAPI:",
    "APIInitialize: Exiting 03/22 08:52:50 INFO :.......init_policyAPI:",
    "RegisterWithPolicyAPI: Entering",
  ];
  return (
    <div className="flex flex-col items-center h-5/6">
      <p className="text-3xl mt-16 text-center px-4">{modelizationName}</p>
      <Terminal lines={lines} />
    </div>
  );
};

export default PendingModelization;
