import { useNavigate } from "react-router-dom"

export default function withNavigation(WrappedComponent) {
  return props => <WrappedComponent {...props} navigate={useNavigate()} />
}