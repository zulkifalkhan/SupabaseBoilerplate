import { IPlan } from "../model/plans.model";
import { UpdatePlanRequest } from "../model/request/plan.request";
import planService from "../service/plans.service";

class PlanController {
  async createPlan(userData: IPlan): Promise<{}> {
    try {
      console.log("controller");
      const newUser = await planService.createPlan(userData);
      return newUser;
    } catch (error) {
      throw new Error("An error occurred while creating the user.");
    }
  }

  async getPlans(): Promise<[]> {
    try {
      const plans = await planService.getPlans();
      return plans;
    } catch (error) {
      throw new Error("An error occurred while fetching plans.");
    }
  }

  async getPlan(planId: string): Promise<{}> {
    try {
      const plan = await planService.getPlan(planId);
      return plan;
    } catch (error) {
      throw new Error("An error occurred while fetching the plan.");
    }
  }

  async updatePlan(
    userId: string,
    updatedPlanData: UpdatePlanRequest
  ): Promise<{} | null> {
    try {
      const updatedPlan = await planService.updatePlan(userId, updatedPlanData);
      return updatedPlan;
    } catch (error) {
      throw new Error("An error occurred while updating the plan.");
    }
  }
}

export default new PlanController();
