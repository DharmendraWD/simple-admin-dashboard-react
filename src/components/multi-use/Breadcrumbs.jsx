import React from 'react'
import { Home as HomeIcon, ChevronRight as ChevronRightIcon } from "@mui/icons-material";



function Breadcrumbs() {
  return (
    <>
      <nav
        className="flex bg-[#c4e4c4] pt-[5px] pb-[5px]"
        aria-label="Breadcrumb "
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
            >
              {/* <HomeIcon className="mr-4 h-4 w-4" /> */}
              Documentation /
            </a>
          </li>
          <li>
            <div className="flex items-center">
              {/* <ChevronRightIcon className="h-4 w-4" /> */}
              <a
                href="#"
                className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2"
              >
                Application UI
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRightIcon className="h-4 w-4" />
              <span className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                Breadcrumbs
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumbs