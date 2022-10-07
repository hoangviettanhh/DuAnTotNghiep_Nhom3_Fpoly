<!DOCTYPE html>
<html lang="en">
<body>
@include('layouts.header')
<div id="pcoded" class="pcoded iscollapsed" nav-type="theme1" theme-layout="vertical" vertical-placement="left" vertical-layout="wide" pcoded-device-type="desktop" vertical-nav-type="expanded" vertical-effect="shrink" vnavigation-view="view1" fream-type="theme1" sidebar-img="false" sidebar-img-type="img1" layout-type="light">
    <div id="pcoded" class="pcoded iscollapsed" nav-type="theme1" theme-layout="vertical" vertical-placement="left"
         vertical-layout="wide" pcoded-device-type="desktop" vertical-nav-type="expanded" vertical-effect="shrink"
         vnavigation-view="view1" fream-type="theme1" sidebar-img="false" sidebar-img-type="img1" layout-type="light">
        <div class="pcoded-overlay-box"></div>
        <div class="pcoded-container navbar-wrapper">
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div class="main-body menu-active-content" id="content-body-techres" style="transition: all .3s ease;">
                                @yield('content')
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div ><button class="btn-view btn-load-more" onclick="loadData()" data-toggle="tooltip" data-placement="top" data-original-title="Tải lại"><i class="icofont icofont-refresh"></i></button>
@include('setting.password.change')
@include('layouts.modal')
@include('notify.error')
@include('notify.success')
@include('notify.sweet_alert')
@include('layouts.script')
@include('chat.index')
@include('message.popup.index')
@include('message.visible_ver2.right.slider')
@stack('scripts')
</body>
</html>
<script src=""></script>

