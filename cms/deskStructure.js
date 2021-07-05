import S from '@sanity/desk-tool/structure-builder'
import { createSuperPane } from 'sanity-super-pane';

export default () =>
  S.list()
    .title('Sagas')
    .items([
      // S.documentTypeListItems(),
      S.listItem().title('Sagas').child(createSuperPane('saga', S)),
    ]);