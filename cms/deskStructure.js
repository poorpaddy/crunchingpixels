import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !["homePage"].includes(item.getId())
      ),
    ]);
