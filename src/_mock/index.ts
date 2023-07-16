import './api/string-info-api';
import './api/system-info-api';
import './api/module-info-api';
import './api/dashboard-info-api';
import './api/alarm-info-api';
import './api/history-info-api';
import './api/export-info-api';
import mock from './mock';

mock.onAny().passThrough();
