import * as index from '../';

describe('index.ts', () => {
    it('should export all utils', () => {
        expect(index).toBeDefined();
        expect(index).toHaveProperty('HttpsAssetResolver');
        expect(index).toHaveProperty('HttpsBackendAssetResolver');
    });
});
