type PendingModelization = {
  name: string;
  status: "InProgress" | "Finished" | "Error";
  logs: string;
  power: string;
};
