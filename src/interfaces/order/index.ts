import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  delivery_manager_id?: string;
  delivery_personnel_id?: string;
  created_at?: any;
  updated_at?: any;

  user_order_delivery_manager_idTouser?: UserInterface;
  user_order_delivery_personnel_idTouser?: UserInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  delivery_manager_id?: string;
  delivery_personnel_id?: string;
}
