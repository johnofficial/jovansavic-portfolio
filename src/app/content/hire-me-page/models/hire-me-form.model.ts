

export class HireMeFormModel{
  name: string;
  email: string;
  project_name: string;
  project_budget: number;
  project_description: string;

  constructor(name, email, project_name, project_budget, project_description){
    this.name = name;
    this.email = email;
    this.project_name = project_name;
    this.project_budget = project_budget;
    this.project_description = project_description;
  }
}

