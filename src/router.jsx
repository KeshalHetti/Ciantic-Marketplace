import React from 'react'
import Login from './pages/Login'
import Error from './pages/Error'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import ComingSoon from './pages/ComingSoon'
import Maintenance from './pages/Maintenance'
import Contact from './pages/Contact'
import UploadWork from './pages/UploadWork'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CreateProfile from './pages/UserProfile'
import ItemDetailOne from './pages/ItemDetailOne'
import Auction from './pages/Auction'
import DarkVersionOne from './pages/DarkVersionOne'
import ExploreOne from './pages/ExploreOne'
import CreatorProfileEdit from './pages/EditUserProfile'
import ChangeLog from './pages/ChangeLog'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
   
        {/* auth router  */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />

        {/* special router page  */}
        <Route exact path="/error" element={<Error />} />
        <Route exact path="/comingsoon" element={<ComingSoon />} />
        <Route exact path="/maintenance" element={<Maintenance />} />

       {/*page routes  */}
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/upload-work" element={<UploadWork />} />
        <Route exact path="/creator-profile" element={<CreateProfile />} />
        <Route exact path="/creator-profile-edit" element={<CreatorProfileEdit />} />
        <Route exact path="/item-detail-one" element={<ItemDetailOne />} />
        <Route exact path="/auction" element={<Auction />} />
        <Route exact path="/explore-one" element={<ExploreOne />} />
        <Route exact path="/index-dark" element={<DarkVersionOne />} />
        <Route exact path="/index-dark-rtl" element={<DarkVersionOne />} />
        <Route exact path="/index" element={<DarkVersionOne />} />
        <Route exact path="/" element={<DarkVersionOne />} />
        <Route exact path="/index-rtl" element={<DarkVersionOne />} />
        <Route exact path="/changelog" element={<ChangeLog />} />
      </Routes>
    </BrowserRouter>
  )
}
