export interface initialAuthStateInterface {
  email: string,
  password: string,
  user: {} | null,
  error: string,
  confirmation: string,
  loading: boolean,
  registered: boolean,
  showPassword: string,
  showPopup: boolean
}
