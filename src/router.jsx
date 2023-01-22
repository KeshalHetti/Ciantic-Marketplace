import React from 'react'
import Login from './pages/Login'
import Error from './pages/Error'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import ComingSoon from './pages/ComingSoon'
import Maintenance from './pages/Maintenance'
import LockScreen from './pages/LockScreen'
import Support from './pages/Support'
import OverView from './pages/Overview'
import Guides from './pages/Guides'
import Faqs from './pages/Faqs'
import Contact from './pages/Contact'
import UploadWork from './pages/UploadWork'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BecomeCreator from './pages/BecomeCreator'
import CreateProfile from './pages/CreatorProfile'
import Wallet from './pages/Walllet'
import Activity from './pages/Activity'
import ItemDetailOne from './pages/ItemDetailOne'
import ItemDetailTwo from './pages/ItemDetailTwo'
import Auction from './pages/Auction'
import DarkVersionOne from './pages/DarkVersionOne'
import ExploreOne from './pages/ExploreOne'
import CreatorProfileEdit from './pages/CreatorProfileEdit'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import ChangeLog from './pages/ChangeLog'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
   
        {/* auth router  */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/lock-screen" element={<LockScreen />} />

        {/* special router page  */}
        <Route exact path="/error" element={<Error />} />
        <Route exact path="/comingsoon" element={<ComingSoon />} />
        <Route exact path="/maintenance" element={<Maintenance />} />

        {/* help center routes */}
        <Route exact path="/helpcenter-support-request" element={<Support />} />
        <Route exact path="/helpcenter-overview" element={<OverView />} />
        <Route exact path="/helpcenter-guides" element={<Guides />} />
        <Route exact path="/helpcenter-faqs" element={<Faqs />} />

        {/*page routes  */}
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/upload-work" element={<UploadWork />} />
        <Route exact path="/become-creator" element={<BecomeCreator />} />
        <Route exact path="/creator-profile" element={<CreateProfile />} />
        <Route exact path="/creator-profile-edit" element={<CreatorProfileEdit />} />
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/activity" element={<Activity />} />
        <Route exact path="/item-detail-one" element={<ItemDetailOne />} />
        <Route exact path="/item-detail-two" element={<ItemDetailTwo />} />
        <Route exact path="/auction" element={<Auction />} />
        <Route exact path="/explore-one" element={<ExploreOne />} />
        <Route exact path="/index-dark" element={<DarkVersionOne />} />
        <Route exact path="/index-dark-rtl" element={<DarkVersionOne />} />
        <Route exact path="/index" element={<DarkVersionOne />} />
        <Route exact path="/" element={<DarkVersionOne />} />
        <Route exact path="/index-rtl" element={<DarkVersionOne />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/changelog" element={<ChangeLog />} />
      </Routes>
    </BrowserRouter>
  )
}
