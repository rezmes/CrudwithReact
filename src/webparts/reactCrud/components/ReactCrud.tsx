// // import * as React from "react";
// // import styles from "./ReactCrud.module.scss";
// // import { IReactCrudProps } from "./IReactCrudProps";
// // import { escape } from "@microsoft/sp-lodash-subset";
// // import { IReactCrudState } from "../IReactCrudState";

// // import {
// //   ISPHttpClientOptions,
// //   SPHttpClient,
// //   SPHttpClientResponse,
// // } from "@microsoft/sp-http";

// // import {
// //   TextField,
// //   autobind,
// //   PrimaryButton,
// //   DetailsList,
// //   DetailsListLayoutMode,
// //   CheckboxVisibility,
// //   SelectionMode,
// //   Dropdown,
// //   IDropdown,
// //   IDropdownOption,
// //   ITextFieldStyles,
// //   IDropdownStyles,
// //   DetailsRowCheck,
// //   Selection,
// // } from "office-ui-fabric-react";

// // let _softwareListColumns = [
// //   {
// //     key: "Id",
// //     name: "Id",
// //     fieldName: "Id",
// //     minWidth: 70,
// //     maxWidth: 90,
// //     isResizable: true,
// //   },
// //   {
// //     key: "Title",
// //     name: "Title",
// //     fieldName: "Title",
// //     minWidth: 70,
// //     maxWidth: 90,
// //     isResizable: true,
// //   },
// //   {
// //     key: "SoftwareName",
// //     name: "SoftwareName",
// //     fieldName: "SoftwareName",
// //     minWidth: 70,
// //     maxWidth: 90,
// //     isResizable: true,
// //   },
// //   {
// //     key: "SoftwareVendor",
// //     name: "SoftwareVendor",
// //     fieldName: "SoftwareVendor",
// //     minWidth: 70,
// //     maxWidth: 90,
// //     isResizable: true,
// //   },
// //   {
// //     key: "SoftwareDescription",
// //     name: "SoftwareDescription",
// //     fieldName: "SoftwareDescription",
// //     minWidth: 70,
// //     maxWidth: 90,
// //     isResizable: true,
// //   },
// //   {
// //     key: "SoftwareVersion",
// //     name: "SoftwareVersion",
// //     fieldName: "SoftwareVersion",
// //     minWidth: 70,
// //     maxWidth: 90,
// //     isResizable: true,
// //   },
// // ];

// // export default class ReactCrud extends React.Component<
// //   IReactCrudProps,
// //   IReactCrudState
// // > {
// //   constructor(props: IReactCrudProps, states: IReactCrudState) {
// //     super(props);

// //     this.state = {
// //       status: "Ready",
// //       SoftwareListItems: [],
// //       SoftwareListItem: {
// //         Id: 0,
// //         Title: "",
// //         SoftwareName: "",
// //         SoftwareVendor: "Select an Option",
// //         SoftwareDescription: "",
// //         SoftwareVersion: "",
// //       },
// //     };

// //     // this._selection = new Selection({
// //     //   onSelectionChanged: this._onSelectionChanged,
// //     // });
// //   }
// //   // componentDidMount(): void {
// //   //   fetch(
// //   //     this.props.siteUrl + "/_api/web/lists/GetByTitle('SoftwareList')/items"
// //   //   )
// //   //     .then((response) => response.json())
// //   //     .then((data) => this.setState({ SoftwareListItems: data.value }))
// //   //     .catch((error) => console.log(error));
// //   // }
// //   // componentDidUpdate(
// //   //   prevProps: Readonly<IReactCrudProps>,
// //   //   prevState: Readonly<IReactCrudState>,
// //   //   prevContext: any
// //   // ): void {}

// //   public render(): React.ReactElement<IReactCrudProps> {
// //     const dropdownRef = React.createRef<IDropdown>();
// //     return (
// //       <div className={styles.reactCrud}>
// //         <TextField
// //           label="ID"
// //           required={true}
// //           value={this.state.SoftwareListItem.Id.toString()}
// //           style={textFieldStyles}
// //           onChanged={(e) => {
// //             this.state.SoftwareListItem.Id = e;
// //           }}
// //         />
// //         <TextField
// //           label="Title"
// //           required={true}
// //           value={this.state.SoftwareListItem.Title.toString()}
// //           style={textFieldStyles}
// //           onChanged={(e) => {
// //             this.state.SoftwareListItem.Title = e;
// //           }}
// //         />
// //         <TextField
// //           label="SoftwareName"
// //           required={true}
// //           value={this.state.SoftwareListItem.SoftwareName.toString()}
// //           style={textFieldStyles}
// //           onChanged={(e) => {
// //             this.state.SoftwareListItem.SoftwareName = e;
// //           }}
// //         />
// //         <TextField
// //           label="SoftwareVendor"
// //           required={true}
// //           value={this.state.SoftwareListItem.SoftwareVendor.toString()}
// //           style={textFieldStyles}
// //           onChanged={(e) => {
// //             this.state.SoftwareListItem.SoftwareVendor = e;
// //           }}
// //         />
// //       </div>
// //     );
// //   }
// // }
// import * as React from "react";
// import styles from "./ReactCrud.module.scss";
// import { IReactCrudProps } from "./IReactCrudProps";
// import { escape } from "@microsoft/sp-lodash-subset";
// import { IReactCrudState } from "../IReactCrudState";

// import {
//   ISPHttpClientOptions,
//   SPHttpClient,
//   SPHttpClientResponse,
// } from "@microsoft/sp-http";

// import {
//   TextField,
//   autobind,
//   PrimaryButton,
//   DetailsList,
//   DetailsListLayoutMode,
//   CheckboxVisibility,
//   SelectionMode,
//   Dropdown,
//   IDropdown,
//   IDropdownOption,
//   DetailsRowCheck,
//   Selection,
// } from "office-ui-fabric-react";
// import { ISoftwareListItem } from "../ISoftwareListItem";

// let _softwareListColumns = [
//   {
//     key: "Id",
//     name: "Id",
//     fieldName: "Id",
//     minWidth: 70,
//     maxWidth: 90,
//     isResizable: true,
//   },
//   {
//     key: "Title",
//     name: "Title",
//     fieldName: "Title",
//     minWidth: 70,
//     maxWidth: 90,
//     isResizable: true,
//   },
//   {
//     key: "SoftwareName",
//     name: "SoftwareName",
//     fieldName: "SoftwareName",
//     minWidth: 70,
//     maxWidth: 90,
//     isResizable: true,
//   },
//   {
//     key: "SoftwareVendor",
//     name: "SoftwareVendor",
//     fieldName: "SoftwareVendor",
//     minWidth: 70,
//     maxWidth: 90,
//     isResizable: true,
//   },
//   {
//     key: "SoftwareDescription",
//     name: "SoftwareDescription",
//     fieldName: "SoftwareDescription",
//     minWidth: 70,
//     maxWidth: 90,
//     isResizable: true,
//   },
//   {
//     key: "SoftwareVersion",
//     name: "SoftwareVersion",
//     fieldName: "SoftwareVersion",
//     minWidth: 70,
//     maxWidth: 90,
//     isResizable: true,
//   },
// ];

// const textFieldStyles: Partial<ITextFieldStyles> = {
//   fieldGroup: {
//     width: 300,
//   },
// };
// const narrowDropdownStyles: Partial<IDropdownStyles> = {
//   fieldGroup: {
//     width: 100,
//   },
// };

// const dropdownStyles: Partial<IDropdownStyles> = {
//   dropdown: { width: 300 },
// };

// const checkboxStyles: Partial<ICheckboxStyles> = {
//   checkbox: {
//     marginTop: 20,
//   },
// };

// export default class ReactCrud extends React.Component<
//   IReactCrudProps,
//   IReactCrudState
// > {
//   private _selection: Selection | null = null;

//   private _onItemsSelectionChanged = () => {
//     this.setState({
//       SoftwareListItem: this._selection.getSelection()[0] as ISoftwareListItem,
//     });
//   };
//   private dropdownRef: Dropdown | null = null; // Define dropdownRef

//   constructor(props: IReactCrudProps, states: IReactCrudState) {
//     super(props);

//     this.state = {
//       status: "Ready",
//       SoftwareListItems: [],
//       SoftwareListItem: {
//         Id: 0,
//         Title: "",
//         SoftwareName: "",
//         SoftwareVendor: "Select an Option",
//         SoftwareDescription: "",
//         SoftwareVersion: "",
//       },
//     };

//     this._selection = new Selection({
//       onSelectionChanged: this._onItemsSelectionChanged,
//     });
//   }

//   private _getListItems(): Promise<ISoftwareListItem[]> {
//     const url: string =
//       this.props.siteUrl + "/_api/web/lists/GetByTitle('SoftwareList')/items";
//     return this.props.context.spHttpClient
//       .get(url, SPHttpClient.configurations.v1)
//       .then((response: SPHttpClientResponse) => {
//         return response.json();
//       })
//       .then((json) => {
//         return json.value;
//       }) as Promise<ISoftwareListItem[]>;
//   }
//   public bindDetailsList(message: string): void {
//     this._getListItems().then((listItems) => {
//       this.setState({
//         SoftwareListItems: listItems,
//         status: message,
//       });
//     });
//   }
//   public componentDidMount(): void {
//     this.bindDetailsList("All Records have been loaded Successfully.");
//   }
//   // componentDidMount(): void {
//   //   fetch(
//   //     this.props.siteUrl + "/_api/web/lists/GetByTitle('SoftwareList')/items"
//   //   )
//   //     .then((response) => response.json())
//   //     .then((data) => this.setState({ SoftwareListItems: data.value }))
//   //     .catch((error) => console.log(error));
//   // }
//   // componentDidUpdate(
//   //   prevProps: Readonly<IReactCrudProps>,
//   //   prevState: Readonly<IReactCrudState>,
//   //   prevContext: any
//   // ): void {}

//   public render(): React.ReactElement<IReactCrudProps> {
//     return (
//       <div className={styles.reactCrud}>
//         <TextField
//           label="ID"
//           required={false}
//           value={this.state.SoftwareListItem.Id.toString()}
//           onChanged={(e) => {
//             this.state.SoftwareListItem.Id = e;
//           }}
//         />
//         <TextField
//           label="Title"
//           required={true}
//           value={this.state.SoftwareListItem.Title.toString()}
//           onChanged={(e) => {
//             this.state.SoftwareListItem.Title = e;
//           }}
//         />
//         <TextField
//           label="SoftwareName"
//           required={true}
//           value={this.state.SoftwareListItem.SoftwareName.toString()}
//           onChanged={(e) => {
//             this.state.SoftwareListItem.SoftwareName = e;
//           }}
//         />
//         {/* <TextField
//           label="SoftwareVendor"
//           required={true}
//           value={this.state.SoftwareListItem.SoftwareVendor.toString()}
//           onChanged={(e) => {
//             this.state.SoftwareListItem.SoftwareVendor = e;
//           }}
//         /> */}
//         <TextField
//           label="SoftwareVersion"
//           required={true}
//           value={this.state.SoftwareListItem.SoftwareVersion.toString()}
//           onChanged={(e) => {
//             this.state.SoftwareListItem.SoftwareVersion = e;
//           }}
//         />
//         <TextField
//           label="Softwaredescription"
//           required={true}
//           value={this.state.SoftwareListItem.SoftwareDescription.toString()}
//           onChanged={(e) => {
//             this.state.SoftwareListItem.SoftwareDescription = e;
//           }}
//         />
//         <Dropdown
//           componentRef={dropdownRef}
//           placeHolder="Select an option"
//           label="Software Vendor"
//           options={[
//             { key: "Sun", text: "Sun" },
//             { key: "Microsoft", text: "Microsoft" },
//             { key: "Google", text: "Google" },
//           ]}
//           defaultSelectedKey={this.state.SoftwareListItem.SoftwareVendor}
//           required
//           style={narrowDropdownStyles}
//           onChanged={(e) => {
//             this.state.SoftwareListItem.SoftwareVendor = e.text;
//           }}
//         />

//         <p className={styles.title}>
//           {/* <PrimaryButton text="Add" title="Add" onClick={this.btnAdd_click} />
//           <PrimaryButton text="Update" onClick={this.btnUpdate_click} />
//           <PrimaryButton text="Delete" onClick={this.btnDelete_click} /> */}
//         </p>
//         <div id="divStatus">{this.state.status}</div>
//         <div>
//           <DetailsList
//             items={this.state.SoftwareListItems}
//             columns={_softwareListColumns}
//             setKey="Id"
//             checkboxVisibility={CheckboxVisibility.always}
//             layoutMode={DetailsListLayoutMode.fixedColumns}
//             selectionMode={SelectionMode.single}
//             compact={true}
//             selection={this._selection}
//           />
//         </div>
//       </div>
//     );
//   }
// }
