import marimo

__generated_with = "0.12.4"
app = marimo.App(width="medium")


@app.cell
def _():
    from anywidget_styling import Widget
    Widget()
    return (Widget,)


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
