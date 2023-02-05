import * as path from 'path';

export const PACKAGE_ROOT = path.join(__dirname, '..', '..', '..');

export const DEFAULT_CLIENT_ENTRY = path.join(PACKAGE_ROOT, 'src', 'runtime', 'client-entry.tsx')

export const DEFAULT_HTML_PATH = path.join(PACKAGE_ROOT, 'template.html');