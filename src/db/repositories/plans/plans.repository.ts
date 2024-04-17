import { IPlan } from "../../../modules/plans/model/plans.model";
import { UpdatePlanRequest } from "../../../modules/plans/model/request/plan.request";
import supabase from "../../config/config";

class PlanRepository {
  async createPlan(plan: IPlan): Promise<{}> {
    try {
      console.log(plan);
      const { error } = await supabase.from("plans").insert(plan);

      if (error) {
        throw error;
      }

      return { message: "Plan created successfully" };
    } catch (error) {
      throw new Error("An error occurred while creating the plan.");
    }
  }

  async getPlan(id: string): Promise<{}> {
    try {
      const { data, error } = await supabase
        .from("plans")
        .select()
        .eq("id", id);

      return data;
    } catch (error) {}
  }

  async getPlans(): Promise<[]> {
    try {
      const { data, error } = await supabase.from("plans").select();

      return data as any;
    } catch (error) {}
  }

  async updatePlanById(id: string, user: UpdatePlanRequest): Promise<{}> {
    try {
      const { data, error } = await supabase
        .from("plan")
        .update(user)
        .eq("id", id);

      return { message: "Plan updated successfully" };
    } catch (error) {}
  }
}

export default new PlanRepository();
