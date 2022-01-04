window.addEventListener('load', function() {
            Pdr.validateCss('fc22abc5a5851272b7aae53e21cdbb4346685713/assets/vendor-571d67531622102402268bd2c623c17f.css');
            Pdr.onLoad();
        }, false);
        Pdr.importCss([
            'fc22abc5a5851272b7aae53e21cdbb4346685713/assets/kekka-1722a7503fe9bd56ce9d88f98a69cac9.css',
            {
                'mobile': 'fc22abc5a5851272b7aae53e21cdbb4346685713/assets/mobile-91f30e8d456c9764f2b527c48d627831.css',
                'tablet': 'fc22abc5a5851272b7aae53e21cdbb4346685713/assets/tablet-3bf10e706a72866d7fe4423a4f422dd2.css',
                'pc': 'fc22abc5a5851272b7aae53e21cdbb4346685713/assets/pc-520c4a3f3a49a6e91c01fe01a1c5b001.css'
            }[PdrIF.queryParamValue('device_profile')]
        ]);
        Pdr.baseURL = window.location.protocol + '//' + window.location.host + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
  






