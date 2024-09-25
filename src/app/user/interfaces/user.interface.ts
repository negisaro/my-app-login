export interface Role {
  id:      number;
  name:    string;
  usuario: User[];
  activo:  boolean;
}

export interface User {
  id:                 number;
  name:               string;
  lastName:           string;
  username:           string;
  correoElectronico:  string;
  roles:              Role[];
  activo:             boolean;
}

