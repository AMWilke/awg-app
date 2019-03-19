import { AppConfig } from '@awg-app/app.config';
import { Meta } from '@awg-core/core-models';

export const METADATA: Meta = {
    page: {
        yearStart: 2015,
        yearRecent: new Date().getFullYear(),
        version: AppConfig.VERSION,
        versionReleaseDate: AppConfig.VERSION_RELEASE_DATE
    },
    edition: {
        editors:
            '<a href="http://anton-webern.ch/index.php?id=3" target="_blank" ref="noopener noreferrer">Thomas Ahrend</a>',
        lastModified: '29. Januar 2016'
    },
    structure: {
        author: 'Stefan Münnich',
        lastModified: '29. Januar 2016'
    }
};
