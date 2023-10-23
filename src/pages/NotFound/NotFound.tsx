import React from "react"
import { Link } from "react-router-dom"
import { PATHS } from "../../routes/paths"

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">
        Error 404 the place where you are looking for does not exist
      </h1>
      <Link
        className="border rounded border-current bg-sky-500 text-gray-100 mt-4"
        to={PATHS.HOME}
      >
        Back to home
      </Link>
    </div>
  )
}
export default NotFound
