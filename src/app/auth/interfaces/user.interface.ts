export interface User {
  _id:      string;
  name:     string;
  lastName: string;
  correoElectronico: string;
  username: string;
  password: string;
  isActive: boolean;
  roles:    string[];
}
