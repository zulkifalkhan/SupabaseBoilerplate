import planRepository from "../../../db/repositories/plans/plans.repository";
import { IPlan } from "../model/plans.model";
import { UpdatePlanRequest } from "../model/request/plan.request";

//this service file is for creating plans and doing the update, get plan etc.
//creating plan is like subscribing a plan which means that every plan being subscribed means we create a new plan
//which means that user has started that plan

//by creating plan it will automatically go into the in_progress

class PlanService {
  async createPlan(userData: IPlan): Promise<{}> {
    // Add any business logic or validation here before creating the plan

    const newPlan = await planRepository.createPlan(userData);
    return newPlan;
  }

  async getPlans(): Promise<[]> {
    // Retrieve all plans from the database
    const users = await planRepository.getPlans();
    return users;
  }

  async getPlan(planId: string): Promise<{}> {
    // Retrieve a plan by ID from the database
    const user = await planRepository.getPlan(planId);
    return user;
  }

  async updatePlan(
    planId: string,
    updatedPlanData: UpdatePlanRequest
  ): Promise<{} | null> {
    // Update a plan in the database
    const updatedPlan = await planRepository.updatePlanById(
      planId,
      updatedPlanData
    );
    return updatedPlan;
  }
}

export default new PlanService();
