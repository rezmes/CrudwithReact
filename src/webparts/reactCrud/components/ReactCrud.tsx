import * as React from "react";
import styles from "./ReactCrud.module.scss";
import { ISoftwareListItem } from "./ISoftwareListItem";
import { IReactCrudProps } from "./IReactCrudProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { IReactCrudState } from "./IReactCrudState";

import {
  ISPHttpClientOptions,
  SPHttpClient,
  SPHttpClientResponse,
} from "@microsoft/sp-http";

import {
  TextField,
  // autobind,
  PrimaryButton,
  DetailsList,
  DetailsListLayoutMode,
  CheckboxVisibility,
  SelectionMode,
  Dropdown,
  IDropdown,
  IDropdownOption,
  // ITextFieldStyles,
  // IDropdownStyles,
  DetailsRowCheck,
  Selection,
} from "office-ui-fabric-react";

let _softwareListColumns = [
  {
    key: "Id",
    name: "Id",
    fieldName: "Id",
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
  },
  {
    key: "Title",
    name: "Title",
    fieldName: "Title",
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
  },
  {
    key: "SoftwareName",
    name: "SoftwareName",
    fieldName: "SoftwareName",
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
  },
  {
    key: "SoftwareVendor",
    name: "SoftwareVendor",
    fieldName: "SoftwareVendor",
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
  },
  {
    key: "SoftwareDescription",
    name: "SoftwareDescription",
    fieldName: "SoftwareDescription",
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
  },
  {
    key: "SoftwareVersion",
    name: "SoftwareVersion",
    fieldName: "SoftwareVersion",
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
  },
];

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

const textFieldStyles = { width: 300 };
const narrowDropdownStyles = { width: 100 };

export default class ReactCrud extends React.Component<
  IReactCrudProps,
  IReactCrudState
> {
  private dropdownRef: Dropdown | null = null; // Define the dropdown ref;
  private _selection: Selection;
  private _onItemsSelectionChanged = () => {
    this.setState({
      SoftwareListItem: this._selection.getSelection()[0] as ISoftwareListItem,
    });
  };

  constructor(props: IReactCrudProps, states: IReactCrudState) {
    super(props);

    this.state = {
      status: "Ready",
      SoftwareListItems: [],
      SoftwareListItem: {
        Id: 0,
        Title: "",
        SoftwareName: "",
        SoftwareVendor: "Select an Option",
        SoftwareDescription: "",
        SoftwareVersion: "",
      },
    };

    this._selection = new Selection({
      onSelectionChanged: this._onItemsSelectionChanged,
    });
  }

  private _getListItems(): Promise<ISoftwareListItem[]> {
    const url: string = `${this.props.siteUrl}/_api/web/lists/GetByTitle('SoftwareCatalog')/items`;
    return this.props.context.spHttpClient
      .get(url, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      })
      .then((json) => {
        return json.value;
      }) as Promise<ISoftwareListItem[]>;
  }

  public bindDetailsList(message: string): void {
    this._getListItems().then((listItems) => {
      this.setState({ SoftwareListItems: listItems, status: message });
    });
  }

  public componentDidMount(): void {
    this.bindDetailsList("All Records have been Loaded successfully");
  }

  public render(): React.ReactElement<IReactCrudProps> {
    return (
      <div className={styles.reactCrud}>
        <TextField
          label="ID"
          required={false}
          style={textFieldStyles}
          value={this.state.SoftwareListItem.Id.toString()}
          onChanged={(e) => {
            const newItem = {
              ...this.state.SoftwareListItem,
              Id: parseInt(e.target.value || "0"),
            };
            this.setState({ SoftwareListItem: newItem });
          }}
        />
        <TextField
          label="Title"
          required={true}
          style={textFieldStyles}
          value={this.state.SoftwareListItem.Title}
          onChanged={(e) => {
            const newItem = {
              ...this.state.SoftwareListItem,
              Title: e.target.value || "",
            };
            this.setState({ SoftwareListItem: newItem });
          }}
        />
        <TextField
          label="SoftwareName"
          required={true}
          style={textFieldStyles}
          value={this.state.SoftwareListItem.SoftwareName}
          onChanged={(e) => {
            const newItem = {
              ...this.state.SoftwareListItem,
              SoftwareName: e.target.value || "",
            };
            this.setState({ SoftwareListItem: newItem });
          }}
        />
        <Dropdown
          componentRef={(ref) => {
            this.dropdownRef = ref as any as Dropdown;
          }}
          placeHolder="Select an option"
          label="Software Vendor"
          options={[
            { key: "Sun", text: "Sun" },
            { key: "Microsoft", text: "Microsoft" },
            { key: "Google", text: "Google" },
          ]}
          defaultSelectedKey={this.state.SoftwareListItem.SoftwareVendor}
          required
          style={narrowDropdownStyles}
          onChanged={(option) => {
            const newItem = {
              ...this.state.SoftwareListItem,
              SoftwareVendor: option.text,
            };
            this.setState({ SoftwareListItem: newItem });
          }}
        />
        <p className={styles.title}>
          {/* <PrimaryButton  text="Add"  title="Add"  onClick={this._onAddClick}  />
          <PrimaryButton  text="Update"  title="Update"  onClick={this._onUpdateClick}  />
          <PrimaryButton  text="Delete"  title="Delete"  onClick={this._onDeleteClick}  /> */}
        </p>
        <div id="divStatus">{this.state.status}</div>
        <div>
          <DetailsList
            items={this.state.SoftwareListItems}
            columns={_softwareListColumns}
            setKey="Id"
            checkboxVisibility={CheckboxVisibility.onHover}
            layoutMode={DetailsListLayoutMode.fixedColumns}
            selectionMode={SelectionMode.single}
            compact={true}
            selection={this._selection}
          />
        </div>
      </div>
    );
  }
}
