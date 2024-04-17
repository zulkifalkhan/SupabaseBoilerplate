interface UpdatePlanRequest {
  user_id: string;
  plan_type: string;
  plan_status: Status | null;
  start_date: string;
  end_date: string;
}

enum Status {
  in_progress = "in_progress",
  completed = "completed",
  canceled = "canceled",
}

export { UpdatePlanRequest };
