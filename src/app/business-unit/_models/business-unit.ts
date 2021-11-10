export interface BusinessUnit {
  id?: number;
  parentBuId?: number;
  orgId?: number;
  buName?: string;
  buAlias1?: string;
  buAlias2?: string;
  buAlias3?: string;
  emailId?: string;
  website?: string;
  isActive?: boolean;
  createdOn?: Date;
  createdBy?: number;
  modifiedOn?: Date;
  modifiedBy?: number;

  parentBuName?: string;
  orgName?: string;
}
