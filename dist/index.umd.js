(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/slicedToArray'), require('react'), require('prop-types'), require('@mui/material'), require('@mui/system'), require('@mui/material/styles'), require('date-fns'), require('@babel/runtime/helpers/extends'), require('@mui/lab/AdapterDateFns'), require('@mui/lab/LocalizationProvider'), require('@mui/lab/StaticDatePicker'), require('@mui/icons-material/Close'), require('@mui/icons-material/ChevronLeft'), require('@mui/icons-material/ChevronRight'), require('@mui/icons-material/MoreVert'), require('@mui/icons-material/Today'), require('@mui/icons-material/Settings'), require('@mui/icons-material/Archive'), require('@mui/icons-material/Autorenew'), require('@mui/icons-material/LocalPrintshop'), require('@mui/icons-material/PlayCircleOutline'), require('@babel/runtime/helpers/defineProperty'), require('@mui/icons-material/EventNoteRounded')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/slicedToArray', 'react', 'prop-types', '@mui/material', '@mui/system', '@mui/material/styles', 'date-fns', '@babel/runtime/helpers/extends', '@mui/lab/AdapterDateFns', '@mui/lab/LocalizationProvider', '@mui/lab/StaticDatePicker', '@mui/icons-material/Close', '@mui/icons-material/ChevronLeft', '@mui/icons-material/ChevronRight', '@mui/icons-material/MoreVert', '@mui/icons-material/Today', '@mui/icons-material/Settings', '@mui/icons-material/Archive', '@mui/icons-material/Autorenew', '@mui/icons-material/LocalPrintshop', '@mui/icons-material/PlayCircleOutline', '@babel/runtime/helpers/defineProperty', '@mui/icons-material/EventNoteRounded'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-material-scheduler"] = factory(global._slicedToArray, global.React, global.PropTypes, global.material, global.system, global.styles, global.dateFns, global._extends, global.AdapterDateFns, global.LocalizationProvider, global.StaticDatePicker, global.CloseIcon, global.ChevronLeftIcon, global.ChevronRightIcon, null, global.TodayIcon, global.SettingsIcon, global.ArchiveIcon, global.AutorenewIcon, global.LocalPrintshopIcon, global.PlayCircleOutlineIcon, global._defineProperty, global.EventNoteRoundedIcon));
})(this, (function (_slicedToArray, React, PropTypes, material, system, styles, dateFns, _extends, AdapterDateFns, LocalizationProvider, StaticDatePicker, CloseIcon, ChevronLeftIcon, ChevronRightIcon, MoreVert, TodayIcon, SettingsIcon, ArchiveIcon, AutorenewIcon, LocalPrintshopIcon, PlayCircleOutlineIcon, _defineProperty, EventNoteRoundedIcon) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
  var AdapterDateFns__default = /*#__PURE__*/_interopDefaultLegacy(AdapterDateFns);
  var LocalizationProvider__default = /*#__PURE__*/_interopDefaultLegacy(LocalizationProvider);
  var StaticDatePicker__default = /*#__PURE__*/_interopDefaultLegacy(StaticDatePicker);
  var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
  var ChevronLeftIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronLeftIcon);
  var ChevronRightIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronRightIcon);
  var TodayIcon__default = /*#__PURE__*/_interopDefaultLegacy(TodayIcon);
  var SettingsIcon__default = /*#__PURE__*/_interopDefaultLegacy(SettingsIcon);
  var ArchiveIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArchiveIcon);
  var AutorenewIcon__default = /*#__PURE__*/_interopDefaultLegacy(AutorenewIcon);
  var LocalPrintshopIcon__default = /*#__PURE__*/_interopDefaultLegacy(LocalPrintshopIcon);
  var PlayCircleOutlineIcon__default = /*#__PURE__*/_interopDefaultLegacy(PlayCircleOutlineIcon);
  var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
  var EventNoteRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(EventNoteRoundedIcon);

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var StyledAutoComplete = styles.styled(material.Autocomplete)(function (_ref) {
    var theme = _ref.theme;
    return _defineProperty__default["default"]({
      color: 'inherit',
      minWidth: '20ch',
      display: 'inline-flex',
      margin: theme.spacing(.5, 1.5),
      transition: theme.transitions.create('width')
    }, theme.breakpoints.up('sm'), {
      width: '30ch'
    });
  });

  function ToolbarSearchbar(props) {
    var events = props.events,
        _onInputChange = props.onInputChange;

    var _useState = React.useState(''),
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    var _useState3 = React.useState(''),
        _useState4 = _slicedToArray__default["default"](_useState3, 2),
        inputValue = _useState4[0],
        setInputValue = _useState4[1];

    var handleOnChange = function handleOnChange(event, newValue) {
      setValue(newValue);

      _onInputChange(newValue);
    };

    return /*#__PURE__*/React__default["default"].createElement(StyledAutoComplete, {
      value: value,
      id: "scheduler-autocomplete",
      inputValue: inputValue,
      sx: {
        display: 'inline-flex'
      },
      onChange: handleOnChange,
      options: events === null || events === void 0 ? void 0 : events.sort(function (a, b) {
        return -b.groupLabel.localeCompare(a.groupLabel);
      }),
      groupBy: function groupBy(option) {
        return option === null || option === void 0 ? void 0 : option.groupLabel;
      }
      /*
      (
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Box
              component="span"
              sx={{
                width: 16,
                height: 16,
                mr: 1,
                borderRadius: "50%",
                backgroundColor: option?.color || theme.palette.secondary.main
              }}
            />
            {option?.groupLabel}
          </Box>
        )
       */
      ,
      getOptionLabel: function getOptionLabel(option) {
        var _option$startHour, _option$endHour;

        return option && "".concat(option === null || option === void 0 ? void 0 : option.groupLabel, " | (").concat((_option$startHour = option === null || option === void 0 ? void 0 : option.startHour) !== null && _option$startHour !== void 0 ? _option$startHour : '', " - ").concat((_option$endHour = option === null || option === void 0 ? void 0 : option.endHour) !== null && _option$endHour !== void 0 ? _option$endHour : '', ")");
      },
      onInputChange: function onInputChange(event, newInputValue) {
        setInputValue(newInputValue);

        _onInputChange(newInputValue);
      },
      renderOption: function renderOption(props, option) {
        var _option$startHour2, _option$endHour2;

        return /*#__PURE__*/React__default["default"].createElement(material.Box, _extends__default["default"]({
          component: "li",
          sx: {
            fontSize: 12
          }
        }, props), dateFns.format(dateFns.parse(option === null || option === void 0 ? void 0 : option.date, 'yyyy-MM-dd', new Date()), 'dd-MMMM-yyyy'), "(", (_option$startHour2 = option === null || option === void 0 ? void 0 : option.startHour) !== null && _option$startHour2 !== void 0 ? _option$startHour2 : '', " - ", (_option$endHour2 = option === null || option === void 0 ? void 0 : option.endHour) !== null && _option$endHour2 !== void 0 ? _option$endHour2 : '', ")");
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/React__default["default"].createElement(material.TextField, _extends__default["default"]({}, params, {
          size: "small",
          label: "Search...",
          InputProps: _objectSpread$2({}, params.InputProps)
        }));
      }
    });
  }

  ToolbarSearchbar.propTypes = {
    events: PropTypes__default["default"].array,
    onInputChange: PropTypes__default["default"].func
  };
  ToolbarSearchbar.defaultProps = {};

  function SchedulerToolbar(props) {
    var events = props.events,
        switchMode = props.switchMode,
        today = props.today,
        toolbarProps = props.toolbarProps,
        onModeChange = props.onModeChange,
        onSearchResult = props.onSearchResult,
        alertProps = props.alertProps,
        onAlertCloseButtonClicked = props.onAlertCloseButtonClicked,
        onDateChange = props.onDateChange;

    var _useState = React.useState(),
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        searchResult = _useState2[0],
        setSearchResult = _useState2[1];

    var _useState3 = React.useState(switchMode),
        _useState4 = _slicedToArray__default["default"](_useState3, 2),
        mode = _useState4[0],
        setMode = _useState4[1];

    var _useState5 = React.useState(null),
        _useState6 = _slicedToArray__default["default"](_useState5, 2),
        anchorMenuEl = _useState6[0],
        setAnchorMenuEl = _useState6[1];

    var _useState7 = React.useState(null),
        _useState8 = _slicedToArray__default["default"](_useState7, 2),
        anchorDateEl = _useState8[0],
        setAnchorDateEl = _useState8[1];

    var _useState9 = React.useState(today || new Date()),
        _useState10 = _slicedToArray__default["default"](_useState9, 2),
        selectedDate = _useState10[0],
        setSelectedDate = _useState10[1];

    var _useState11 = React.useState(dateFns.getDaysInMonth(selectedDate)),
        _useState12 = _slicedToArray__default["default"](_useState11, 2),
        daysInMonth = _useState12[0],
        setDaysInMonth = _useState12[1];

    var openMenu = Boolean(anchorMenuEl);
    var openDateSelector = Boolean(anchorDateEl);
    var commonIconButtonProps = {
      size: "medium",
      edge: "start",
      color: "inherit",
      "aria-label": "menu"
    };
    var menus = [{
      label: "Read events",
      icon: /*#__PURE__*/React__default["default"].createElement(PlayCircleOutlineIcon__default["default"], {
        fontSize: "small"
      })
    }, {
      label: "Refresh",
      icon: /*#__PURE__*/React__default["default"].createElement(AutorenewIcon__default["default"], {
        fontSize: "small"
      })
    }, {
      label: "Export",
      icon: /*#__PURE__*/React__default["default"].createElement(ArchiveIcon__default["default"], {
        fontSize: "small"
      })
    }, {
      label: "Print",
      icon: /*#__PURE__*/React__default["default"].createElement(LocalPrintshopIcon__default["default"], {
        fontSize: "small"
      })
    }];
    /**
     * @name handleCloseMenu
     * @description
     * @return void
     */


    var handleCloseMenu = function handleCloseMenu() {
      setAnchorMenuEl(null);
    };
    /**
     * @name handleOpenDateSelector
     * @description
     * @param event
     * @return void
     */


    var handleOpenDateSelector = function handleOpenDateSelector(event) {
      setAnchorDateEl(event.currentTarget);
    };
    /**
     * @name handleCloseDateSelector
     * @description
     * @return void
     */


    var handleCloseDateSelector = function handleCloseDateSelector() {
      setAnchorDateEl(null);
    };
    /**
     * @name handleChangeDate
     * @description
     * @param method
     * @return void
     */


    var handleChangeDate = function handleChangeDate(method) {
      if (typeof method !== 'function') return;
      var options = mode === 'month' ? {
        months: 1
      } : {
        weeks: 1
      };
      var newDate = method(selectedDate, options);
      setDaysInMonth(dateFns.getDaysInMonth(newDate));
      setSelectedDate(newDate);
    };

    React.useEffect(function () {
      if (mode) {
        onModeChange(mode);
      } // eslint-disable-next-line

    }, [mode]);
    React.useEffect(function () {
      onDateChange(daysInMonth, selectedDate); // eslint-disable-next-line
    }, [daysInMonth, selectedDate]);
    React.useEffect(function () {
      onSearchResult(searchResult); // eslint-disable-next-line
    }, [searchResult]);
    return /*#__PURE__*/React__default["default"].createElement(material.Toolbar, {
      variant: "dense",
      sx: {
        display: 'contents',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      component: "div",
      sx: {
        m: .5,
        display: 'flex',
        alignItems: 'center'
      }
    }, toolbarProps.showDatePicker && /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      component: "div",
      sx: {
        flexGrow: 1
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Hidden, {
      smDown: true
    }, /*#__PURE__*/React__default["default"].createElement(material.IconButton, _extends__default["default"]({
      sx: {
        ml: 0
      }
    }, commonIconButtonProps, {
      onClick: function onClick() {
        return handleChangeDate(dateFns.sub);
      }
    }), /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(material.Button, {
      size: "medium",
      id: "basic-button",
      "aria-haspopup": "true",
      endIcon: /*#__PURE__*/React__default["default"].createElement(TodayIcon__default["default"], null),
      "aria-controls": "basic-menu",
      onClick: handleOpenDateSelector,
      "aria-expanded": openDateSelector ? 'true' : undefined
    }, dateFns.format(selectedDate, mode === 'month' ? 'MMMM-yyyy' : 'PPP')), /*#__PURE__*/React__default["default"].createElement(material.IconButton, _extends__default["default"]({
      sx: {
        ml: .5
      }
    }, commonIconButtonProps, {
      onClick: function onClick() {
        return handleChangeDate(dateFns.add);
      }
    }), /*#__PURE__*/React__default["default"].createElement(ChevronRightIcon__default["default"], null))), /*#__PURE__*/React__default["default"].createElement(material.Hidden, {
      smUp: true
    }, /*#__PURE__*/React__default["default"].createElement(material.IconButton, _extends__default["default"]({}, commonIconButtonProps, {
      onClick: handleOpenDateSelector
    }), /*#__PURE__*/React__default["default"].createElement(TodayIcon__default["default"], null))), /*#__PURE__*/React__default["default"].createElement(material.Menu, {
      id: "date-menu",
      anchorEl: anchorDateEl,
      open: openDateSelector,
      onClose: handleCloseDateSelector,
      MenuListProps: {
        'aria-labelledby': 'basic-button'
      }
    }, /*#__PURE__*/React__default["default"].createElement(LocalizationProvider__default["default"], {
      dateAdapter: AdapterDateFns__default["default"]
    }, /*#__PURE__*/React__default["default"].createElement(StaticDatePicker__default["default"], {
      displayStaticWrapperAs: "desktop",
      value: selectedDate,
      onChange: function onChange(newValue) {
        setDaysInMonth(dateFns.getDaysInMonth(newValue));
        setSelectedDate(newValue);
        handleCloseDateSelector();
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/React__default["default"].createElement(material.TextField, params);
      }
    })))), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      component: "div",
      sx: {
        display: 'inline-flex',
        alignItems: 'center'
      }
    }, (toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.showSearchBar) && /*#__PURE__*/React__default["default"].createElement(ToolbarSearchbar, {
      events: events,
      onInputChange: function onInputChange(newValue) {
        var newDate = newValue !== null && newValue !== void 0 && newValue.date ? dateFns.parse(newValue === null || newValue === void 0 ? void 0 : newValue.date, 'yyyy-MM-dd', today) : new Date();
        setDaysInMonth(dateFns.getDaysInMonth(newDate));
        setSelectedDate(newDate);
        setSearchResult(newValue);
      }
    }), (toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.showSwitchModeButtons) && /*#__PURE__*/React__default["default"].createElement(material.ToggleButtonGroup, {
      exclusive: true,
      value: mode,
      size: "small",
      color: "primary",
      "aria-label": "text button group",
      onChange: function onChange(e, newMode) {
        setMode(newMode);
      }
    }, ['month', 'week'].map(function (tb) {
      return /*#__PURE__*/React__default["default"].createElement(material.ToggleButton, {
        key: tb,
        value: tb
      }, tb);
    })))), /*#__PURE__*/React__default["default"].createElement(material.Menu, {
      id: "menu-menu",
      open: openMenu,
      anchorEl: anchorMenuEl,
      onClose: handleCloseMenu,
      onClick: handleCloseMenu,
      transformOrigin: {
        horizontal: 'right',
        vertical: 'top'
      },
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom'
      }
    }, menus.map(function (menu, index) {
      return /*#__PURE__*/React__default["default"].createElement(material.MenuItem, {
        key: menu.label
      }, /*#__PURE__*/React__default["default"].createElement(material.ListItemIcon, null, menu.icon), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
        variant: "body2"
      }, menu.label));
    }), /*#__PURE__*/React__default["default"].createElement(material.Divider, null), /*#__PURE__*/React__default["default"].createElement(material.MenuItem, null, /*#__PURE__*/React__default["default"].createElement(material.ListItemIcon, null, /*#__PURE__*/React__default["default"].createElement(SettingsIcon__default["default"], {
      fontSize: "small"
    })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      variant: "body2"
    }, "Settings"))), (alertProps === null || alertProps === void 0 ? void 0 : alertProps.open) && /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      component: "div",
      sx: {
        mt: 1
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Collapse, {
      in: true
    }, /*#__PURE__*/React__default["default"].createElement(material.Alert, {
      color: alertProps === null || alertProps === void 0 ? void 0 : alertProps.color,
      severity: alertProps === null || alertProps === void 0 ? void 0 : alertProps.severity,
      sx: {
        borderRadius: 0,
        mb: 0
      },
      action: alertProps !== null && alertProps !== void 0 && alertProps.showActionButton ? /*#__PURE__*/React__default["default"].createElement(material.IconButton, {
        "aria-label": "close",
        color: "inherit",
        size: "small",
        onClick: onAlertCloseButtonClicked
      }, /*#__PURE__*/React__default["default"].createElement(CloseIcon__default["default"], {
        fontSize: "inherit"
      })) : null
    }, alertProps === null || alertProps === void 0 ? void 0 : alertProps.message))));
  }

  SchedulerToolbar.propTypes = {
    today: PropTypes__default["default"].object.isRequired,
    events: PropTypes__default["default"].array.isRequired,
    switchMode: PropTypes__default["default"].string.isRequired,
    alertProps: PropTypes__default["default"].object,
    toolbarProps: PropTypes__default["default"].object,
    onDateChange: PropTypes__default["default"].func.isRequired,
    onModeChange: PropTypes__default["default"].func.isRequired,
    onSearchResult: PropTypes__default["default"].func.isRequired,
    onAlertCloseButtonClicked: PropTypes__default["default"].func.isRequired
  };
  SchedulerToolbar.defaultProps = {
    alertProps: {
      open: false,
      message: '',
      color: 'info',
      severity: 'info',
      showActionButton: true
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true,
      showOptions: false
    }
  };

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var StyledTableCell$1 = system.styled(material.TableCell)(function (_ref) {
    var _ref2;

    var theme = _ref.theme;
    return _ref2 = {}, _defineProperty__default["default"](_ref2, "&.".concat(material.tableCellClasses.head), {
      //backgroundColor: theme.palette.common.black,
      borderTop: "1px solid #ccc !important",
      borderBottom: "1px solid #ccc !important",
      borderLeft: "1px solid #ccc !important",
      '&:nth-of-type(1)': {
        borderLeft: "0px !important"
      }
    }), _defineProperty__default["default"](_ref2, "&.".concat(material.tableCellClasses.body), {
      fontSize: 14,
      height: 96,
      width: 64,
      maxWidth: 64,
      cursor: 'pointer',
      borderLeft: "1px solid #ccc",
      '&:nth-of-type(7n+1)': {
        borderLeft: 0
      },
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover
      }
    }), _defineProperty__default["default"](_ref2, "&.".concat(material.tableCellClasses.body, ":hover"), {
      backgroundColor: "#eee"
    }), _ref2;
  });
  var StyledTableRow$1 = system.styled(material.TableRow)(function (_ref3) {
    _ref3.theme;
    return {
      '&:nth-of-type(odd)': {//backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0
      }
    };
  });

  function MonthModeView(props) {
    var options = props.options,
        columns = props.columns,
        rows = props.rows,
        searchResult = props.searchResult,
        onTaskClick = props.onTaskClick,
        onCellClick = props.onCellClick,
        onEventsChange = props.onEventsChange;
    var theme = styles.useTheme();

    var _useState = React.useState({}),
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];
    /**
     * @name onCellDragOver
     * @param e
     * @return void
     */


    var onCellDragOver = function onCellDragOver(e) {
      e.preventDefault();
    };
    /**
     * @name onCellDragStart
     * @description
     * @param e
     * @param item
     * @param rowIndex
     * @return void
     */


    var onCellDragStart = function onCellDragStart(e, item, rowIndex) {
      setState(_objectSpread$1(_objectSpread$1({}, state), {}, {
        itemTransfert: {
          item: item,
          rowIndex: rowIndex
        }
      }));
    };
    /**
     * @name onCellDragEnter
     * @description
     * @param e
     * @param elementId
     * @param rowIndex
     * @return void
     */


    var onCellDragEnter = function onCellDragEnter(e, elementId, rowIndex) {
      e.preventDefault();
      setState(_objectSpread$1(_objectSpread$1({}, state), {}, {
        transfertTarget: {
          elementId: elementId,
          rowIndex: rowIndex
        }
      }));
    };
    /**
     * @name onCellDragEnd
     * @description
     * @param e
     * @return void
     */


    var onCellDragEnd = function onCellDragEnd(e) {
      e.preventDefault();
      if (!(state !== null && state !== void 0 && state.itemTransfert) && !(state !== null && state !== void 0 && state.transfertTarget)) return;
      var transfert = state.itemTransfert;
      var transfertTarget = state.transfertTarget;
      var rowsCopy = Array.from(rows);
      var rowInd = rowsCopy === null || rowsCopy === void 0 ? void 0 : rowsCopy.findIndex(function (d) {
        return d.id === transfertTarget.rowIndex;
      });

      if (rowInd !== -1) {
        var _rowsCopy$rowInd, _rowsCopy$rowInd$days;

        var dayInd = (_rowsCopy$rowInd = rowsCopy[rowInd]) === null || _rowsCopy$rowInd === void 0 ? void 0 : (_rowsCopy$rowInd$days = _rowsCopy$rowInd.days) === null || _rowsCopy$rowInd$days === void 0 ? void 0 : _rowsCopy$rowInd$days.findIndex(function (d) {
          return d.id === transfertTarget.elementId;
        });

        if (dayInd !== -1) {
          var _rowsCopy$rowInd2, _transfert$item, _transfert$item$date, _transfert$item2;

          var day = (_rowsCopy$rowInd2 = rowsCopy[rowInd]) === null || _rowsCopy$rowInd2 === void 0 ? void 0 : _rowsCopy$rowInd2.days[dayInd];
          var splittedDate = transfert === null || transfert === void 0 ? void 0 : (_transfert$item = transfert.item) === null || _transfert$item === void 0 ? void 0 : (_transfert$item$date = _transfert$item.date) === null || _transfert$item$date === void 0 ? void 0 : _transfert$item$date.split('-');

          if (!(transfert !== null && transfert !== void 0 && (_transfert$item2 = transfert.item) !== null && _transfert$item2 !== void 0 && _transfert$item2.day)) {
            // Get day of the date (DD)
            transfert.item.day = parseInt(splittedDate[2]);
          }

          if (transfert.item.day !== (day === null || day === void 0 ? void 0 : day.day)) {
            var itemCheck = day.data.findIndex(function (item) {
              return item.day === transfert.item.day && item.label === transfert.item.label;
            });

            if (itemCheck === -1) {
              var _prevDayEvents$data, _prevDayEvents$data2;

              var prevDayEvents = rowsCopy[transfert.rowIndex].days.find(function (d) {
                return d.day === transfert.item.day;
              });
              var itemIndexToRemove = prevDayEvents === null || prevDayEvents === void 0 ? void 0 : (_prevDayEvents$data = prevDayEvents.data) === null || _prevDayEvents$data === void 0 ? void 0 : _prevDayEvents$data.findIndex(function (i) {
                return i.id === transfert.item.id;
              });

              if (itemIndexToRemove === undefined || itemIndexToRemove === -1) {
                console.log(prevDayEvents);
                return console.log("item to remove is not found");
              }

              prevDayEvents === null || prevDayEvents === void 0 ? void 0 : (_prevDayEvents$data2 = prevDayEvents.data) === null || _prevDayEvents$data2 === void 0 ? void 0 : _prevDayEvents$data2.splice(itemIndexToRemove, 1);
              transfert.item.day = day === null || day === void 0 ? void 0 : day.day;
              transfert.item.date = dateFns.format(day === null || day === void 0 ? void 0 : day.date, 'yyyy-MM-dd');
              day.data.push(transfert.item);
              setState(_objectSpread$1(_objectSpread$1({}, state), {}, {
                rows: rowsCopy,
                itemTransfert: null,
                transfertTarget: null
              }));
            }
          }
        }
      }
    };
    /**
     * @name handleCellClick
     * @description
     * @param event
     * @param row
     * @param day
     * @return void
     */


    var handleCellClick = function handleCellClick(event, row, day) {
      var _day$data;

      event.preventDefault();
      event.stopPropagation();

      if ((day === null || day === void 0 ? void 0 : (_day$data = day.data) === null || _day$data === void 0 ? void 0 : _day$data.length) === 0) {
        onCellClick(event, row, day);
      }
    };
    /**
     * @name renderTask
     * @description
     * @param tasks
     * @param rowId
     * @return {unknown[] | undefined}
     */


    var renderTask = function renderTask() {
      var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var rowId = arguments.length > 1 ? arguments[1] : undefined;
      return tasks === null || tasks === void 0 ? void 0 : tasks.map(function (task, index) {
        return (searchResult && ((task === null || task === void 0 ? void 0 : task.groupLabel) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.groupLabel) || (task === null || task === void 0 ? void 0 : task.user) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.user)) || !searchResult) && /*#__PURE__*/React__default["default"].createElement(material.Paper, {
          draggable: true,
          onClick: function onClick(e) {
            return handleTaskClick(e, task);
          },
          key: "item-d-".concat(task === null || task === void 0 ? void 0 : task.id, "-").concat(rowId),
          elevation: 0,
          sx: {
            width: "100%",
            py: 0,
            my: .3,
            color: "#fff",
            display: 'inline-flex',
            backgroundColor: (task === null || task === void 0 ? void 0 : task.color) || theme.palette.primary.light
          },
          onDragStart: function onDragStart(e) {
            return onCellDragStart(e, task, rowId);
          }
        }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
          sx: {
            px: 0.5
          }
        }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
          variant: "caption"
        }, task === null || task === void 0 ? void 0 : task.label)));
      });
    };
    /**
     * @name handleTaskClick
     * @description
     * @param event
     * @param task
     * @return void
     */


    var handleTaskClick = function handleTaskClick(event, task) {
      event.preventDefault();
      event.stopPropagation();
      onTaskClick(event, task);
    };

    React.useEffect(function () {
      if (state !== null && state !== void 0 && state.rows) {
        var _state$itemTransfert;

        onEventsChange(Object.assign({}, state === null || state === void 0 ? void 0 : (_state$itemTransfert = state.itemTransfert) === null || _state$itemTransfert === void 0 ? void 0 : _state$itemTransfert.item));
      } // eslint-disable-next-line

    }, [state === null || state === void 0 ? void 0 : state.rows, state === null || state === void 0 ? void 0 : state.itemTransfert]);
    return /*#__PURE__*/React__default["default"].createElement(material.TableContainer, {
      component: material.Paper,
      sx: {
        minHeight: (options === null || options === void 0 ? void 0 : options.minHeight) || 540,
        maxHeight: (options === null || options === void 0 ? void 0 : options.maxHeight) || 540
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Table, {
      size: "small",
      "aria-label": "simple table",
      stickyHeader: true,
      sx: {
        minWidth: (options === null || options === void 0 ? void 0 : options.minWidth) || 650,
        maxWidth: (options === null || options === void 0 ? void 0 : options.maxWidth) || 650
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.TableHead, {
      sx: {
        height: 24
      }
    }, /*#__PURE__*/React__default["default"].createElement(StyledTableRow$1, null, columns === null || columns === void 0 ? void 0 : columns.map(function (column, index) {
      return /*#__PURE__*/React__default["default"].createElement(StyledTableCell$1, {
        align: "center",
        key: (column === null || column === void 0 ? void 0 : column.headerName) + '-' + index
      }, column === null || column === void 0 ? void 0 : column.headerName);
    }))), /*#__PURE__*/React__default["default"].createElement(material.TableBody, null, rows === null || rows === void 0 ? void 0 : rows.map(function (row, index) {
      var _row$days;

      return /*#__PURE__*/React__default["default"].createElement(StyledTableRow$1, {
        key: "row-".concat(row.id, "-").concat(index),
        sx: {
          '&:last-child td, &:last-child th': {
            border: 0
          }
        }
      }, row === null || row === void 0 ? void 0 : (_row$days = row.days) === null || _row$days === void 0 ? void 0 : _row$days.map(function (day) {
        var _day$data2;

        return /*#__PURE__*/React__default["default"].createElement(StyledTableCell$1, {
          scope: "row",
          align: "center",
          component: "th",
          sx: {
            px: 1
          },
          key: "day-".concat(day.id),
          onDragEnd: onCellDragEnd,
          onDragOver: onCellDragOver,
          onDragEnter: function onDragEnter(e) {
            return onCellDragEnter(e, day.id, row.id);
          },
          onClick: function onClick(event) {
            return handleCellClick(event, row, day);
          }
        }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
          variant: "body1"
        }, day.day), (day === null || day === void 0 ? void 0 : (_day$data2 = day.data) === null || _day$data2 === void 0 ? void 0 : _day$data2.length) > 0 && renderTask(day === null || day === void 0 ? void 0 : day.data, row.id) || /*#__PURE__*/React__default["default"].createElement(EventNoteRoundedIcon__default["default"], {
          fontSize: "large",
          htmlColor: "#ccc"
        }));
      }));
    }))));
  }

  MonthModeView.propTypes = {
    columns: PropTypes__default["default"].array,
    rows: PropTypes__default["default"].array,
    date: PropTypes__default["default"].string,
    options: PropTypes__default["default"].object,
    onDateChange: PropTypes__default["default"].func,
    onTaskClick: PropTypes__default["default"].func,
    onCellClick: PropTypes__default["default"].func
  };
  MonthModeView.defaultProps = {
    columns: [],
    rows: []
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var StyledTableCell = system.styled(material.TableCell)(function (_ref) {
    var _ref2;

    _ref.theme;
    return _ref2 = {}, _defineProperty__default["default"](_ref2, "&.".concat(material.tableCellClasses.head), {
      paddingLeft: 4,
      paddingRight: 4,
      borderTop: "1px solid #ccc !important",
      borderBottom: "1px solid #ccc !important",
      borderLeft: "1px solid #ccc !important",
      "&:nth-of-type(1)": {
        borderLeft: "0px !important"
      }
    }), _defineProperty__default["default"](_ref2, "&.".concat(material.tableCellClasses.body), {
      fontSize: 12,
      height: 16,
      width: 128,
      maxWidth: 128,
      cursor: 'pointer',
      borderLeft: "1px solid #ccc",
      "&:nth-of-type(1)": {
        width: 80,
        maxWidth: 80
      },
      "&:nth-of-type(8n+1)": {
        borderLeft: 0
      },
      "&:nth-of-type(even)": {//backgroundColor: theme.palette.action.hover
      }
    }), _defineProperty__default["default"](_ref2, "&.".concat(material.tableCellClasses.body, ":hover"), {
      backgroundColor: "#eee"
    }), _ref2;
  });
  var StyledTableRow = system.styled(material.TableRow)(function (_ref3) {
    _ref3.theme;
    return {
      '&:nth-of-type(odd)': {//backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0
      }
    };
  });
  var StyledTableContainer = system.styled(material.TableContainer)(function (_ref4) {
    _ref4.theme;
    return {
      "&::-webkit-scrollbar": {
        width: 7,
        height: 6
      },
      "&::-webkit-scrollbar-track": {
        WebkitBoxShadow: "inset 0 0 6px rgb(125, 161, 196, 0.5)"
      },
      "&::-webkit-scrollbar-thumb": {
        WebkitBorderRadius: 4,
        borderRadius: 4,
        background: "rgba(0, 172, 193, .5)",
        WebkitBoxShadow: "inset 0 0 6px rgba(25, 118, 210, .5)"
      },
      "&::-webkit-scrollbar-thumb:window-inactive": {
        background: "rgba(125, 161, 196, 0.5)"
      }
    };
  });

  function WeekModeView(props) {
    var _state$itemTransfert3;

    var options = props.options,
        columns = props.columns,
        rows = props.rows,
        searchResult = props.searchResult,
        onTaskClick = props.onTaskClick,
        onCellClick = props.onCellClick,
        onEventsChange = props.onEventsChange;
    var theme = styles.useTheme();

    var _useState = React.useState({
      columns: columns,
      rows: rows
    }),
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];
    /**
     * @name onCellDragOver
     * @param e
     * @return void
     */


    var onCellDragOver = function onCellDragOver(e) {
      e.preventDefault();
    };
    /**
     * @name onCellDragStart
     * @description
     * @param e
     * @param item
     * @param rowLabel
     * @param rowIndex
     * @param dayIndex
     * @return void
     */


    var onCellDragStart = function onCellDragStart(e, item, rowLabel, rowIndex, dayIndex) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        itemTransfert: {
          item: item,
          rowLabel: rowLabel,
          rowIndex: rowIndex,
          dayIndex: dayIndex
        }
      }));
    };
    /**
     * @name onCellDragEnter
     * @description
     * @param e
     * @param rowLabel
     * @param rowIndex
     * @param dayIndex
     * @return void
     */


    var onCellDragEnter = function onCellDragEnter(e, rowLabel, rowIndex, dayIndex) {
      e.preventDefault();
      setState(_objectSpread(_objectSpread({}, state), {}, {
        transfertTarget: {
          rowLabel: rowLabel,
          rowIndex: rowIndex,
          dayIndex: dayIndex
        }
      }));
    };
    /**
     * @name onCellDragEnd
     * @description
     * @param e
     * @return void
     */


    var onCellDragEnd = function onCellDragEnd(e) {
      var _rowsData$transfertTa;

      e.preventDefault();

      if (!(state !== null && state !== void 0 && state.itemTransfert) || !(state !== null && state !== void 0 && state.transfertTarget)) {
        return; //console.log('undefined source or target')
      }

      var transfert = state.itemTransfert;
      var transfertTarget = state.transfertTarget;
      var rowsData = Array.from(rows);
      var day = (_rowsData$transfertTa = rowsData[transfertTarget === null || transfertTarget === void 0 ? void 0 : transfertTarget.rowIndex]) === null || _rowsData$transfertTa === void 0 ? void 0 : _rowsData$transfertTa.days[transfertTarget === null || transfertTarget === void 0 ? void 0 : transfertTarget.dayIndex];

      if (day) {
        var _transfertTarget$rowL, _prevEventCell$data, _transfert$item3;

        var foundEventIndex = day.data.findIndex(function (e) {
          var _transfert$item, _transfert$item2;

          return e.id === transfert.item.id && e.startHour === (transfert === null || transfert === void 0 ? void 0 : (_transfert$item = transfert.item) === null || _transfert$item === void 0 ? void 0 : _transfert$item.startHour) && e.endHour === (transfert === null || transfert === void 0 ? void 0 : (_transfert$item2 = transfert.item) === null || _transfert$item2 === void 0 ? void 0 : _transfert$item2.endHour);
        }); // Task already exists in the data array of the chosen cell

        if (foundEventIndex !== -1) {
          return;
        } // Timeline label (00:00 am, 01:00 am, etc.)


        var label = (_transfertTarget$rowL = transfertTarget.rowLabel) === null || _transfertTarget$rowL === void 0 ? void 0 : _transfertTarget$rowL.toUpperCase(); // Event cell item to transfert

        var prevEventCell = rowsData[transfert === null || transfert === void 0 ? void 0 : transfert.rowIndex].days[transfert === null || transfert === void 0 ? void 0 : transfert.dayIndex]; // Event's end hour

        var endHourDate = dateFns.parse(transfert.item.endHour, 'p', day === null || day === void 0 ? void 0 : day.date); // Event start hour

        var startHourDate = dateFns.parse(transfert.item.startHour, 'p', day === null || day === void 0 ? void 0 : day.date); // Minutes difference between end and start event hours

        var minutesDiff = dateFns.differenceInMinutes(endHourDate, startHourDate); // New event end hour according to it new cell

        var newEndHour = dateFns.add(dateFns.parse(label, 'p', day === null || day === void 0 ? void 0 : day.date), {
          minutes: minutesDiff
        }); // If event is moved from timeline 00:00 AM

        if (label === '00:00 AM') {
          minutesDiff = dateFns.differenceInMinutes(endHourDate, startHourDate);
          newEndHour = dateFns.add(day === null || day === void 0 ? void 0 : day.date, {
            minutes: minutesDiff
          });
        } // If event is moved from timeline 01:00 AM


        if (label === '01:00 AM') {
          minutesDiff = dateFns.differenceInMinutes(endHourDate, startHourDate);
          newEndHour = dateFns.add(dateFns.parse(label, 'p', day === null || day === void 0 ? void 0 : day.date), {
            minutes: minutesDiff
          });

          if (!dateFns.isValid(startHourDate)) {
            startHourDate = day === null || day === void 0 ? void 0 : day.date;
            minutesDiff = dateFns.differenceInMinutes(endHourDate, startHourDate);
            newEndHour = dateFns.add(dateFns.parse(label, 'p', startHourDate), {
              minutes: minutesDiff
            });
          }
        } // If the start date of event is invalid, it's probably cause by date-fns
        // So we initialize it at 00:00 AM of the event day


        if (!dateFns.isValid(startHourDate)) {
          startHourDate = day === null || day === void 0 ? void 0 : day.date;
          minutesDiff = dateFns.differenceInMinutes(endHourDate, startHourDate);
          newEndHour = dateFns.add(day === null || day === void 0 ? void 0 : day.date, {
            minutes: minutesDiff
          });

          if (label !== '00:00 AM') {
            newEndHour = dateFns.add(dateFns.parse(label, 'p', startHourDate), {
              minutes: minutesDiff
            });
          }
        }

        prevEventCell === null || prevEventCell === void 0 ? void 0 : (_prevEventCell$data = prevEventCell.data) === null || _prevEventCell$data === void 0 ? void 0 : _prevEventCell$data.splice(transfert === null || transfert === void 0 ? void 0 : (_transfert$item3 = transfert.item) === null || _transfert$item3 === void 0 ? void 0 : _transfert$item3.itemIndex, 1);
        transfert.item.startHour = label;
        transfert.item.endHour = dateFns.format(newEndHour, 'HH:mm aaa');
        transfert.item.date = dateFns.format(day === null || day === void 0 ? void 0 : day.date, 'yyyy-MM-dd');
        day.data.push(transfert.item);
        setState(_objectSpread(_objectSpread({}, state), {}, {
          rows: rowsData
        }));
      }
    };
    /**
     * @name handleCellClick
     * @description
     * @param event
     * @param row
     * @param day
     * @return void
     */


    var handleCellClick = function handleCellClick(event, row, day) {
      console.log(day);
      event.preventDefault();
      event.stopPropagation(); //setState({...state, activeItem: day})

      onCellClick(event, row, day);
    };
    /**
     * @name renderTask
     * @description
     * @param tasks
     * @param rowLabel
     * @param rowIndex
     * @param dayIndex
     * @return {unknown[] | undefined}
     */


    var renderTask = function renderTask(tasks, rowLabel, rowIndex, dayIndex) {
      return tasks === null || tasks === void 0 ? void 0 : tasks.map(function (task, itemIndex) {
        return (searchResult && ((task === null || task === void 0 ? void 0 : task.groupLabel) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.groupLabel) || (task === null || task === void 0 ? void 0 : task.user) === (searchResult === null || searchResult === void 0 ? void 0 : searchResult.user)) || !searchResult) && /*#__PURE__*/React__default["default"].createElement(material.Paper, {
          draggable: true,
          elevation: 0,
          onClick: function onClick(e) {
            return handleTaskClick(e, task);
          },
          key: "item_id-".concat(itemIndex, "_r-").concat(rowIndex, "_d-").concat(dayIndex),
          onDragStart: function onDragStart(e) {
            return onCellDragStart(e, _objectSpread(_objectSpread({}, task), {}, {
              itemIndex: itemIndex
            }), rowLabel, rowIndex, dayIndex);
          },
          sx: {
            py: 0,
            mb: .5,
            color: "#fff",
            backgroundColor: (task === null || task === void 0 ? void 0 : task.color) || theme.palette.primary.light
          }
        }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
          sx: {
            px: 0.3
          }
        }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
          variant: "caption",
          noWrap: true
        }, task === null || task === void 0 ? void 0 : task.label)));
      });
    };
    /**
     * @name handleTaskClick
     * @description
     * @param event
     * @param task
     * @return void
     */


    var handleTaskClick = function handleTaskClick(event, task) {
      event.preventDefault();
      event.stopPropagation();
      onTaskClick(event, task);
    };

    React.useEffect(function () {
      var _state$itemTransfert;

      if (state !== null && state !== void 0 && state.rows && state !== null && state !== void 0 && (_state$itemTransfert = state.itemTransfert) !== null && _state$itemTransfert !== void 0 && _state$itemTransfert.item) {
        var _state$itemTransfert2;

        onEventsChange(state === null || state === void 0 ? void 0 : (_state$itemTransfert2 = state.itemTransfert) === null || _state$itemTransfert2 === void 0 ? void 0 : _state$itemTransfert2.item);
      } // eslint-disable-next-line

    }, [state === null || state === void 0 ? void 0 : state.rows, state === null || state === void 0 ? void 0 : (_state$itemTransfert3 = state.itemTransfert) === null || _state$itemTransfert3 === void 0 ? void 0 : _state$itemTransfert3.item]);
    return /*#__PURE__*/React__default["default"].createElement(StyledTableContainer, {
      component: material.Paper,
      sx: {
        minHeight: (options === null || options === void 0 ? void 0 : options.minHeight) || 540,
        maxHeight: (options === null || options === void 0 ? void 0 : options.maxHeight) || 540
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Table, {
      size: "small",
      "aria-label": "simple table",
      stickyHeader: true,
      sx: {
        minWidth: (options === null || options === void 0 ? void 0 : options.minWidth) || 650,
        maxWidth: (options === null || options === void 0 ? void 0 : options.maxWidth) || 650
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.TableHead, {
      sx: {
        height: 24
      }
    }, /*#__PURE__*/React__default["default"].createElement(StyledTableRow, null, /*#__PURE__*/React__default["default"].createElement(StyledTableCell, {
      align: "left"
    }), columns === null || columns === void 0 ? void 0 : columns.map(function (column, index) {
      return /*#__PURE__*/React__default["default"].createElement(StyledTableCell, {
        align: "center",
        key: "weekday-".concat(column === null || column === void 0 ? void 0 : column.day, "-").concat(index)
      }, column === null || column === void 0 ? void 0 : column.weekDay, " ", column === null || column === void 0 ? void 0 : column.month, "/", column === null || column === void 0 ? void 0 : column.day);
    }))), /*#__PURE__*/React__default["default"].createElement(material.TableBody, null, rows === null || rows === void 0 ? void 0 : rows.map(function (row, rowIndex) {
      var _row$data, _row$days;

      return /*#__PURE__*/React__default["default"].createElement(StyledTableRow, {
        key: "timeline-".concat(rowIndex),
        sx: {
          '&:last-child td, &:last-child th': {
            border: 0
          }
        }
      }, /*#__PURE__*/React__default["default"].createElement(StyledTableCell, {
        scope: "row",
        align: "center",
        component: "th",
        sx: {
          px: 1
        },
        onClick: function onClick(event) {
          return handleCellClick(event, row);
        }
      }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
        variant: "body2"
      }, row === null || row === void 0 ? void 0 : row.label), (row === null || row === void 0 ? void 0 : (_row$data = row.data) === null || _row$data === void 0 ? void 0 : _row$data.length) > 0 && renderTask(row === null || row === void 0 ? void 0 : row.data, row.id)), row === null || row === void 0 ? void 0 : (_row$days = row.days) === null || _row$days === void 0 ? void 0 : _row$days.map(function (day, dayIndex) {
        var _day$data;

        return /*#__PURE__*/React__default["default"].createElement(StyledTableCell, {
          key: day === null || day === void 0 ? void 0 : day.id,
          scope: "row",
          align: "center",
          component: "th",
          sx: {
            px: .3,
            py: .5 //backgroundColor: (
            //  state?.activeItem?.id === day?.id ? theme.palette.action.hover : 'inherit'
            //)

          },
          onDragEnd: onCellDragEnd,
          onDragOver: onCellDragOver,
          onDragEnter: function onDragEnter(e) {
            return onCellDragEnter(e, row === null || row === void 0 ? void 0 : row.label, rowIndex, dayIndex);
          },
          onClick: function onClick(event) {
            return handleCellClick(event, _objectSpread({
              rowIndex: rowIndex
            }, row), _objectSpread({
              dayIndex: dayIndex
            }, day));
          }
        }, (day === null || day === void 0 ? void 0 : (_day$data = day.data) === null || _day$data === void 0 ? void 0 : _day$data.length) > 0 && renderTask(day === null || day === void 0 ? void 0 : day.data, row === null || row === void 0 ? void 0 : row.label, rowIndex, dayIndex));
      }));
    }))));
  }

  WeekModeView.propTypes = {
    events: PropTypes__default["default"].array,
    columns: PropTypes__default["default"].array,
    rows: PropTypes__default["default"].array,
    date: PropTypes__default["default"].string,
    options: PropTypes__default["default"].object,
    searchResult: PropTypes__default["default"].object,
    onDateChange: PropTypes__default["default"].func.isRequired,
    onTaskClick: PropTypes__default["default"].func.isRequired,
    onCellClick: PropTypes__default["default"].func.isRequired,
    onEventsChange: PropTypes__default["default"].func.isRequired
  };
  WeekModeView.defaultProps = {};

  /**
   * @name Scheduler
   * @description
   * @param props
   * @constructor
   */

  function Scheduler(props) {
    var events = props.events,
        options = props.options,
        onCellClick = props.onCellClick,
        onTaskClick = props.onTaskClick,
        onEventsChange = props.onEventsChange,
        alertMessage = props.alertMessage,
        alertProps = props.alertProps,
        onAlertCloseButtonClicked = props.onAlertCloseButtonClicked,
        toolbarProps = props.toolbarProps;
    var today = new Date();
    var theme = styles.useTheme();
    var TransitionMode = (options === null || options === void 0 ? void 0 : options.transitionMode) === 'zoom' ? material.Zoom : material.Fade;

    var _useState = React.useState({}),
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    var _useState3 = React.useState(),
        _useState4 = _slicedToArray__default["default"](_useState3, 2),
        searchResult = _useState4[0],
        setSearchResult = _useState4[1];

    var _useState5 = React.useState((options === null || options === void 0 ? void 0 : options.defaultMode) || 'month'),
        _useState6 = _slicedToArray__default["default"](_useState5, 2),
        mode = _useState6[0],
        setMode = _useState6[1];

    var _useState7 = React.useState(today),
        _useState8 = _slicedToArray__default["default"](_useState7, 2),
        selectedDay = _useState8[0],
        setSelectedDay = _useState8[1];

    var _useState9 = React.useState(dateFns.getDaysInMonth(today)),
        _useState10 = _slicedToArray__default["default"](_useState9, 2),
        daysInMonth = _useState10[0],
        setDaysInMonth = _useState10[1];

    var _useState11 = React.useState(dateFns.format(today, 'MMMM-yyyy')),
        _useState12 = _slicedToArray__default["default"](_useState11, 2),
        selectedDate = _useState12[0],
        setSelectedDate = _useState12[1];
    /**
     * @name getMonthHeader
     * @description
     * @return {{headerClassName: string, headerAlign: string, headerName: string, field: string, flex: number, editable: boolean, id: string, sortable: boolean, align: string}[]}
     */


    var getMonthHeader = function getMonthHeader() {
      var _options$startWeekOn;

      var weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      if ((options === null || options === void 0 ? void 0 : (_options$startWeekOn = options.startWeekOn) === null || _options$startWeekOn === void 0 ? void 0 : _options$startWeekOn.toUpperCase()) === 'SUN') {
        weekDays[0] = 'Sun';
        weekDays[6] = 'Mon';
      }

      return weekDays === null || weekDays === void 0 ? void 0 : weekDays.map(function (day, i) {
        return {
          id: "row-day-header-".concat(i + 1),
          flex: 1,
          sortable: false,
          editable: false,
          align: 'center',
          headerName: day,
          headerAlign: 'center',
          field: "rowday".concat(i + 1),
          headerClassName: 'scheduler-theme--header'
        };
      });
    };
    /**
     * @name getMonthRows
     * @description
     * @return {[id: string,  day: number, date: date, data: array]}
     */


    var getMonthRows = function getMonthRows() {
      var _options$startWeekOn2, _lastRow$days;

      var rows = [],
          daysBefore = [];
      var iteration = dateFns.getWeeksInMonth(selectedDay); //Math.ceil(daysInMonth / 7)

      var startOnSunday = (options === null || options === void 0 ? void 0 : (_options$startWeekOn2 = options.startWeekOn) === null || _options$startWeekOn2 === void 0 ? void 0 : _options$startWeekOn2.toUpperCase()) === 'SUN';
      var monthStartDate = dateFns.startOfMonth(selectedDay); // First day of month

      var monthStartDay = dateFns.getDay(monthStartDate); // Index of the day in week

      var dateDay = parseInt(dateFns.format(monthStartDate, 'dd')); // Month start day
      // Condition check helper

      var checkCondition = function checkCondition(v) {
        return startOnSunday ? v <= monthStartDay : v < monthStartDay;
      };

      if (monthStartDay > 1) {
        var _loop = function _loop(i) {
          var subDate = dateFns.sub(monthStartDate, {
            days: monthStartDay - i + (startOnSunday ? 1 : 0)
          });
          var day = parseInt(dateFns.format(subDate, 'dd'));
          var data = events.filter(function (event) {
            return dateFns.isSameDay(subDate, dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()));
          });
          daysBefore.push({
            id: "day_-".concat(day),
            day: day,
            date: subDate,
            data: data
          });
        };

        // Add days of precedent month
        // If Sunday is the first day of week, apply b <= monthStartDay
        // and days: (monthStartDay-b) + 1
        for (var i = 1; checkCondition(i); i++) {
          _loop(i);
        }
      }

      if ((daysBefore === null || daysBefore === void 0 ? void 0 : daysBefore.length) > 0) {
        rows.push({
          id: 0,
          days: daysBefore
        });
      } // Add days and events data


      for (var _i = 0; _i < iteration; _i++) {
        var obj = [];

        var _loop2 = function _loop2(j) {
          var date = dateFns.parse("".concat(dateDay, "-").concat(selectedDate), 'dd-MMMM-yyyy', new Date());
          var data = events.filter(function (event) {
            return dateFns.isSameDay(date, dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()));
          });
          obj.push({
            id: "day_-".concat(dateDay),
            date: date,
            day: dateDay,
            data: data
          });
          dateDay++;
        };

        for (var j = 0; // This condition ensure that days will not exceed 30
        // i === 0 ? 7 - daysBefore?.length means that we substract inserted days
        // in the first line to 7
        j < (_i === 0 ? 7 - (daysBefore === null || daysBefore === void 0 ? void 0 : daysBefore.length) : 7) && dateDay <= daysInMonth; j++) {
          _loop2(j);
        }

        if (_i === 0 && (daysBefore === null || daysBefore === void 0 ? void 0 : daysBefore.length) > 0) {
          rows[0].days = rows[0].days.concat(obj);
          continue;
        }

        if (obj.length > 0) {
          rows.push({
            id: _i,
            days: obj
          });
        }
      } // Check if last row is not fully filled


      var lastRow = rows[iteration - 1];
      var lastRowDaysdiff = 7 - (lastRow === null || lastRow === void 0 ? void 0 : (_lastRow$days = lastRow.days) === null || _lastRow$days === void 0 ? void 0 : _lastRow$days.length);
      var lastDaysData = [];

      if (lastRowDaysdiff > 0) {
        (function () {
          var _lastRow$days2;

          var day = lastRow.days[(lastRow === null || lastRow === void 0 ? void 0 : (_lastRow$days2 = lastRow.days) === null || _lastRow$days2 === void 0 ? void 0 : _lastRow$days2.length) - 1];
          var addDate = day.date;

          for (var _i2 = dateDay; _i2 < dateDay + lastRowDaysdiff; _i2++) {
            addDate = dateFns.add(addDate, {
              days: 1
            });
            var d = dateFns.format(addDate, 'dd'); // eslint-disable-next-line

            var data = events.filter(function (event) {
              return dateFns.isSameDay(addDate, dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date()));
            });
            lastDaysData.push({
              id: "day_-".concat(d),
              date: addDate,
              day: d,
              data: data
            });
          }

          rows[iteration - 1].days = rows[iteration - 1].days.concat(lastDaysData);
        })();
      }

      return rows;
    };
    /**
     * @name getWeekHeader
     * @description
     * @return {{headerClassName: string, headerAlign: string, headerName: string, field: string, flex: number, editable: boolean, id: string, sortable: boolean, align: string}[]}
     */


    var getWeekHeader = function getWeekHeader() {
      var data = [];
      var weekStart = dateFns.startOfWeek(selectedDay, {
        weekStartsOn: 1
      });

      for (var i = 0; i < 7; i++) {
        var date = dateFns.add(weekStart, {
          days: i
        });
        data.push({
          date: date,
          weekDay: dateFns.format(date, 'iii'),
          day: dateFns.format(date, 'dd'),
          month: dateFns.format(date, 'MM')
        });
      }

      return data;
    };

    var getWeekRows = function getWeekRows() {
      var HOURS = 24; //* 2

      var data = [];
      var dayStartHour = dateFns.startOfDay(selectedDay);

      var _loop3 = function _loop3(i) {
        var id = "line_".concat(i);
        var label = dateFns.format(dayStartHour, 'HH:mm aaa'); //TODO Add everyday event capability
        //if (i === 0) {
        //id = `line_everyday`; label = 'Everyday'
        //}
        //TODO Place the processing bloc here if everyday capability is available
        // ...

        if (i > 0) {
          //Start processing bloc
          var obj = {
            id: id,
            label: label,
            days: []
          };
          var columns = getWeekHeader(); // eslint-disable-next-line

          columns.map(function (column, index) {
            var data = events.filter(function (event) {
              var _event$startHour;

              var eventDate = dateFns.parse(event === null || event === void 0 ? void 0 : event.date, 'yyyy-MM-dd', new Date());
              return dateFns.isSameDay(column === null || column === void 0 ? void 0 : column.date, eventDate) && (event === null || event === void 0 ? void 0 : (_event$startHour = event.startHour) === null || _event$startHour === void 0 ? void 0 : _event$startHour.toUpperCase()) === (label === null || label === void 0 ? void 0 : label.toUpperCase());
            });
            obj.days.push({
              id: "column-".concat(index, "_m-").concat(column.month, "_d-").concat(column.day, "_").concat(id),
              date: column === null || column === void 0 ? void 0 : column.date,
              data: data
            });
          }); // Label affectation

          data.push(obj); // End processing bloc

          dayStartHour = dateFns.add(dayStartHour, {
            minutes: 60
          }); // 30
        } //if (i > 0) {
        //  dayStartHour = add(dayStartHour, {minutes: 30})
        //}

      };

      for (var i = 0; i <= HOURS; i++) {
        _loop3(i);
      }

      return data;
    };
    /**
     * @name handleDateChange
     * @description
     * @param day
     * @param date
     * @return void
     */


    var handleDateChange = function handleDateChange(day, date) {
      setDaysInMonth(day);
      setSelectedDay(date);
      setSelectedDate(dateFns.format(date, 'MMMM-yyyy'));
    };
    /**
     * @name handleModeChange
     * @description
     * @param newMode
     * @return void
     */


    var handleModeChange = function handleModeChange(newMode) {
      setMode(newMode);
    };
    /**
     * @name onSearchResult
     * @description
     * @param item
     * @return void
     */


    var onSearchResult = function onSearchResult(item) {
      setSearchResult(item);
    };

    React.useEffect(function () {
      if (mode) {
        if (mode === 'month') {
          setState({
            columns: getMonthHeader(),
            rows: getMonthRows()
          });
        }

        if (mode === 'week') {
          setState({
            columns: getWeekHeader(),
            rows: getWeekRows()
          });
        }
      } // eslint-disable-next-line

    }, [daysInMonth, selectedDay, selectedDate, mode]);
    return /*#__PURE__*/React__default["default"].createElement(system.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React__default["default"].createElement(material.Paper, {
      variant: "outlined",
      elevation: 0,
      sx: {
        p: 0
      }
    }, /*#__PURE__*/React__default["default"].createElement(SchedulerToolbar, {
      today: today,
      events: events,
      switchMode: mode,
      alertProps: alertProps,
      alertMessage: alertMessage,
      toolbarProps: toolbarProps,
      onDateChange: handleDateChange,
      onModeChange: handleModeChange,
      onSearchResult: onSearchResult,
      onAlertCloseButtonClicked: onAlertCloseButtonClicked
    }), /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      container: true,
      spacing: 0,
      alignItems: "center",
      justifyContent: "center"
    }, mode === 'month' && /*#__PURE__*/React__default["default"].createElement(TransitionMode, {
      in: true
    }, /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 12
    }, /*#__PURE__*/React__default["default"].createElement(MonthModeView, {
      options: options,
      date: selectedDate,
      rows: state === null || state === void 0 ? void 0 : state.rows,
      columns: state === null || state === void 0 ? void 0 : state.columns,
      onTaskClick: onTaskClick,
      onCellClick: onCellClick,
      searchResult: searchResult,
      onDateChange: handleDateChange,
      onEventsChange: onEventsChange
    }))), mode === 'week' && /*#__PURE__*/React__default["default"].createElement(TransitionMode, {
      in: true
    }, /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 12
    }, /*#__PURE__*/React__default["default"].createElement(WeekModeView, {
      events: events,
      options: options,
      date: selectedDate,
      rows: state === null || state === void 0 ? void 0 : state.rows,
      columns: state === null || state === void 0 ? void 0 : state.columns,
      onTaskClick: onTaskClick,
      onCellClick: onCellClick,
      searchResult: searchResult,
      onDateChange: handleDateChange,
      onEventsChange: onEventsChange
    }))))));
  }

  Scheduler.propTypes = {
    events: PropTypes__default["default"].array,
    options: PropTypes__default["default"].object,
    alertProps: PropTypes__default["default"].object,
    toolbarProps: PropTypes__default["default"].object,
    onEventsChange: PropTypes__default["default"].func,
    onCellClick: PropTypes__default["default"].func,
    onTaskClick: PropTypes__default["default"].func,
    onAlertCloseButtonClicked: PropTypes__default["default"].func
  };
  Scheduler.defaultProps = {};

  return Scheduler;

}));
